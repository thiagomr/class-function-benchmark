## Introduction

A perfomance benchmarking for using of class and functions in Node JS. I built one of the most common examples in Node JS: an Express API.

## Setup

install dependencies

```bash
npm install
```

run app
```bash
node app.js
```

## Results

I used the AB (apache benchmark) to perform the tests. I ran a few times and averaged the results.

```bash
ab -n 10000 -c 100 http://localhost:8000/class/instance
ab -n 10000 -c 100 http://localhost:8000/function/instance
ab -n 10000 -c 100 http://localhost:8000/class/inheritance
ab -n 10000 -c 100 http://localhost:8000/function/inheritance
```

Test | Class Instance | Function Instance | Class Inheritance | Function Inheritance
--- | --- | --- | --- |--- |--- |--- |--- |--- |--- |--- |---
request min / ms | 18 | 18,5 | 19,25 | 19 |
request max / ms | 74 | 73,75 | 68,75 | 68,5 |
request per second | 5057 | 4974 | 4905 | 4999,25 |
total time / s | 2003 | 2046,75 | 2061,75 | 2026,25 |
