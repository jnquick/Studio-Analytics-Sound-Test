var five = require("johnny-five"),
        board, mic1, mic2, mic3, mic4;

    board = new five.Board();

    board.on("ready", function() {

      // Create a new `microphone` hardware instance.
      mic1 = new five.Sensor({
        pin: "A0",
        freq: 250
        location: "door"
      });

      mic2 = new five.Sensor({
        pin: "A1",
        freq: 250
        location: "hall"
      });

      mic3 = new five.Sensor({
        pin: "A2",
        freq: 250
        location: "desk"
      });

      mic4 = new five.Sensor({
        pin: "A3",
        freq: 250
        location: "floor"
      });

      // Inject the `sensor` hardware into
      // the Repl instance's context;
      // allows direct command line access
      board.repl.inject({
        pot: mic1
        pot: mic2
        pot: mic3
        pot: mic4
      });

      // "data" get the current reading from the photoresistor
      microphone1.on("data", function() {
        console.log( this.location + this.value );
      });
    });


    // References
    //
    // http://nakkaya.com/2009/10/29/connecting-a-photoresistor-to-an-arduino/