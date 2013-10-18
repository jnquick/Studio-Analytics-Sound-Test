var five = require("johnny-five"),
        board, microphone1;

    board = new five.Board();

    board.on("ready", function() {

      // Create a new `microphone` hardware instance.
      microphone1 = new five.Sensor({
        pin: "A0",
        freq: 250
      });

      // Inject the `sensor` hardware into
      // the Repl instance's context;
      // allows direct command line access
      board.repl.inject({
        pot: microphone1
      });

      // "data" get the current reading from the photoresistor
      microphone1.on("data", function() {
        console.log( this.value );
      });
    });


    // References
    //
    // http://nakkaya.com/2009/10/29/connecting-a-photoresistor-to-an-arduino/