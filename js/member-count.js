(function(){var a=new XMLHttpRequest();a.open("GET","https://discordapp.com/api/guilds/251862462343806976/widget.json",!0);a.onreadystatechange=function(){var b=this;if(b.readyState==4&&b.status==200){var c=JSON.parse(b.responseText);document.getElementById("memberCount").innerText=" There are currently "+c.members.length+" members online.";}};a.send();})()
