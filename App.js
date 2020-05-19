import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment'


//const DATA = {
//  timer: 1234567,
//  laps: [12345, 2345, 34567, 98765],
//}

function Timer ({interval, style}) {
  const pad =(n) => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds()/10)
  return(
    <View style={styles.timerContainer}>  
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())}:</Text>
      <Text style={style}> {pad(centiseconds)}</Text>
    </View>
  )
}

function RoundButton({ title, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[ styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.buttonBorder}>
        <Text style={[ styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}


function ButtonsRow ({children}) {
  return(
    <View style={styles.buttonRow}>{children}</View>
  )
}


function Lap ({ number, interval, slowest, fastest}) {
  
  const lapStyle = [
    styles.lap,
    fastest && styles.fastest,
    slowest && styles.slowest,
  ]
  return(
    <View style={styles.lap}>
      <Text style={lapStyle}> lap { number } </Text>
      <Timer style={lapStyle} interval={ interval }>  </Timer>
    </View>
  )
}



function LapsTable({laps, timer}) {

  const finishedLaps = laps.slice(1)
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER

  if (finishedLaps.length >= 2) {
    finishedLaps.forEach(lap => {
      if (lap < min) min = lap
      if (lap > max) max = lap
    })
  }
  return(
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <Lap
          number={laps.length - index}
          key={laps.length - index}
          interval={index === 0 ? timer + lap : lap}
          fastest={lap === min}
          slowest={lap === max}
        />
      ))}
    </ScrollView>
  )
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {  
      start: 0,
      now: 0,
      laps: [ ],
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
    start = () => {
      const now = new Date().getTime()
      this.setState({
        start: now,
        now,
        laps: [0],
      })

      this.timer = setInterval(() => {
        this.setState({ now: new Date().getTime()})
      }, 100)
    }

    lap = () => {
      const timestamp = new Date().getTime()
      const { laps, now, start } = this.state
      const [firstLap, ...other] = laps
      this.setState ({
        laps: [ 0, firstLap + now - start, ...other], 
        start: timestamp,
        now: timestamp,
      })
    }
    stop = () => {
      clearInterval(this.timer)
      const { laps, now, start } = this.state
      const [firstLap, ...other] = laps
      this.setState ({
        laps: [firstLap + now - start, ...other], 
        start: 0,
        now: 0,
      })
    }

    reset = () => {
      this.setState({
        laps: [],
        start: 0,
        now: 0,
      })
    }

    resume = () => {
      const now = new Date().getTime()
      this.setState({
        start: now,
        now,        
      })
      this.timer = setInterval(() => {
        this.setState({ now: new Date().getTime()})
      }, 100)
    }

  render() { 
    const {now, start, laps} = this.state
    const timer = now - start
    return(  
      <View style={styles.container}>
        <Timer interval={laps. reduce(( total, current) => total + current, 0) +  timer}
        style={styles.timer}/>
        { laps.length === 0 && 
          <ButtonsRow>  
            <RoundButton title='Lap' 
            color='#8B8B90' 
            background='#151515'
            disabled
          />
            <RoundButton 
              title='Start' 
              color='#58d167' 
              background='#1B361F'
              onPress={this.start} 
            />
          </ButtonsRow>
        } 
        { start > 0 && 
          <ButtonsRow>   
            <RoundButton 
              title='Lap' 
              color='white' 
              background='gray'
              onPress={this.lap}/>
            <RoundButton 
              title='Stop' 
              color='white' 
              background='red'
              onPress={this.stop} 
            />
          </ButtonsRow>
        }
        { laps.length > 0 && start === 0 &&
          <ButtonsRow>   
            <RoundButton 
              title='Reset' 
              color='white' 
              background='gray'
              onPress={this.reset}/>
            <RoundButton 
              title='Start' 
              color='#58d167' 
              background='#1B361F'
              onPress={this.resume} 
            />
          </ButtonsRow>
        }



        <LapsTable style={styles.lapsTable} laps={laps} timer={timer} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 130,
    paddingHorizontal:20,
  },
  timerContainer: {
    flexDirection: 'row',
  },
  timer: {
    //color: 'white',
    fontSize: 76,
    fontWeight: '200',
    width: 110,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 20,
  },
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 90,
    marginBottom:20,
  },
  lapText: {
    color: 'gray',
    fontSize: 20,
    width: 27,    
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'white',
    paddingVertical: 17,
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  fastest: {
    color: '#BBF858',
  },
  slowest: {
    color: 'red',
  }
});


export default App;