// do something when a message is received at address '/test'
msg.setPort(5050);

// uses argument as variables in hydra

freq = 10

rot = 0.8

inten = 2

msg.on('/play', (args) => {
// log osc results to console
 console.log(args)
  freq += args[2];
 inten += args[2];
  rot += args[2];
})

shape(() => freq).scale(() => inten%10)
.mult(osc().rotate(()=> rot))
.modulate(noise( () => rot%4))
.diff(shape( () => freq%3 ).kaleid(() => inten%10))
.mask(shape(4).scale(2))
.out()

bpm = 65
