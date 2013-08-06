window.onload = function() {
	
	var Timer = {
		
		defaults: {
			type	: 1,
			step	: 50,
			time	: 3000
		},
		
		controls: {
			ring		: document.getElementById("ring"),
			vibro		: document.getElementById("vibro"),
			plus		: document.getElementById("plus"),
			minus	: document.getElementById("minus"),
			timer		: document.getElementById("timer"),
			atimer	: document.getElementById("atimer"),
			go		: document.getElementById("go")
		},
		
		doShake: function() {
			//console.log(Timer.defaults.type);
			if(Timer.defaults.type == 1) {
				navigator.notification.beep(1);
			}
			else {
				navigator.notification.vibrate(1500);
			}
		},
		
		assignActions: function() {
		
			this.controls.timer.value							= this.defaults.time;
			this.controls.ring.style.backgroundColor	= "#CCC";
			
			this.controls.ring.onclick = function() {
				this.style.backgroundColor							= "#CCC";
				Timer.controls.vibro.style.backgroundColor	= "#FFF";
				Timer.defaults.type									= 1;
				//console.log(Timer.defaults.type);
			}
			
			this.controls.vibro.onclick = function() {
				this.style.backgroundColor							= "#CCC";
				Timer.controls.ring.style.backgroundColor	= "#FFF";
				Timer.defaults.type									= 2;
				//console.log(Timer.defaults.type);
			}
			
			this.controls.plus.onclick = function() {
				Timer.controls.timer.value = parseInt(Timer.controls.timer.value) + Timer.defaults.step
				return false;
			}
			
			this.controls.minus.onclick = function() {
				Timer.controls.timer.value = parseInt(Timer.controls.timer.value) - Timer.defaults.step
				return false;
			}
			
			this.controls.go.onclick = function() {
				Timer.controls.atimer.value = Timer.controls.timer.value;
				setTimeout(Timer.doShake, parseInt(Timer.controls.timer.value));
				return false;
			}
		},
		
		runTimer: function() {
			this.assignActions();
		}
	}
	
	document.addEventListener("deviceready", function() {
		Timer.runTimer();
		FastClick.attach(document.body);
	}, true);
	// Timer.runTimer();
}