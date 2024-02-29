# Bharat Clock

__App.jsx__

```
import { useState } from 'react'
import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <center>

      <ClockHeading/>
      <ClockSlogan/>
      <CurrentTime/>

    </center>
  )
}

export default App


```

__ClockHeading.jsx__


```
import React from 'react'

function ClockHeading() {
  return (
    <>
        <h1 classNameName='fw-bolder'>Bharat Clock</h1>
    </>
  )
}

export default ClockHeading

```


__ClockSlogan.jsx__


```
import React from 'react'

function ClockSlogan() {
  return (
    <>
        <p classNameName='lead'>This is the clock that shows the time in Bharat at all times.</p>
    </>
  )
}

export default ClockSlogan

```


__CurrentTime.jsx__


```
import React from 'react'

function CurrentTime() {

    let time = new Date();

  return (
    <>
        <p classNameName='"lead'>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </>
  )
}

export default CurrentTime

```