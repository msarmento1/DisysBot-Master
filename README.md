# Web Dispatcher

See also: 

- [Worker](https://github.com/MatheusMS01/worker)
- [Protocol](https://github.com/MatheusMS01/protocol)

## Introduction
This system will manage simulations dispatching on a distributed system, in a fault tolerance manner.

It will also provide a WEB interface in which users will be able to input the simulations to be analysed and also monitor its progress as the state of the workers.

The simulation application must deal with Optical Network Simulator input and output directives (see more: http://comnet.unb.br/br/grupos/get/ons) to work. It will treat the simulator as a black box.

## Getting started

### Building and installing

#### Prereqs:
- [MongoDB v3.0.15 or better](https://www.mongodb.com/download-center?jmp=nav#community) *Up and running!* I advise to install MongoDB as a service so it will automatically run once the operational system boots.
- [NodeJS v8.10.0 LTS or better](https://nodejs.org/en/)
- [Protocol](https://github.com/MatheusMS01/protocol). Extract the protocol directory and put it on the same level as the web_dispatcher directory

After downloading and extracting the source to a directory, on a terminal, run the following command:

    npm install
    
And that's it!

## Running
After installing the web dispatcher, you can run it by executing the following command on terminal(pwd on root of the project):

    node app.js

It will run a server on port 80 (you can access it on your browser: http://localhost).
