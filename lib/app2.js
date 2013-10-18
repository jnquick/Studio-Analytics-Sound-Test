var five = require("johnny-five"),
        board, mic1, mic2, mic3, mic4;

    board = new five.Board();

    board.on("ready", function() {

      // Create a new `microphone` hardware instance.
      // Location: Door
      mic1 = new five.Sensor({
        pin: "A0",
        freq: 2000
      });

      // "data" get the current reading from the photoresistor
      mic1.scale([ 0, 100 ]).on("data", function() {
        console.log( "Mic1 - Door: " + this.value );
      });

//Repeat

      mic2 = new five.Sensor({
        pin: "A1",
        freq: 2000
      });


      mic2.scale([ 0, 100 ]).on("data", function() {
        console.log( "Mic2 - Hall: " + this.value );
      });



      mic3 = new five.Sensor({
        pin: "A2",
        freq: 2000
      });


      mic3.scale([ 0, 100 ]).on("data", function() {
        console.log( "Mic3 - Desk: " + this.value );
      });


      mic4 = new five.Sensor({
        pin: "A3",
        freq: 2000
      });


      mic4.scale([ 0, 100 ]).on("data", function() {
        console.log( "Mic4 - blah: " + this.value );
      });


    });


    // References
    //
    // http://nakkaya.com/2009/10/29/connecting-a-photoresistor-to-an-arduino/