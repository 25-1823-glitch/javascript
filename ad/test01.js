function showTime() {
            let now = new Date();
            let display = now.toLocaleTimeString();
            document.getElementById("clock").innerHTML = "현제 시간은 " + display
        }