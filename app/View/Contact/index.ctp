<div class="page-contact"></div>
<div class="div-contact">
	<div class="map" id="map-canvas"></div>

	<section class="wrapper">
		<div class="infos-contact">Guillaume Barranco - Développeur Web</div>
		<div class="infos-contact">10 Allée des Hautes tiges, 93160 Noisy Le Grand</div>
		<div class="infos-contact">06-33-08-68-83</div>
		<br />
		<ul class="socials">
			<li class="facebook">
				<a href="#">
					<i class="fi-social-facebook size-34"></i>
				</a>
			</li>
			<li class="twitter">
				<a href="#">
					<i class="fi-social-twitter size-34"></i>
				</a>
			</li>
			<li class="deezer">
				<a href="#">
					<i class="fi-sound size-34"></i>
				</a>
			</li>
			<li class="linkedin">
				<a href="#">
					<i class="fi-social-linkedin size-34"></i>
				</a>
			</li>
			<li class="github">
				<a href="#">
					<i class="fi-social-github size-34"></i>
				</a>
			</li>
		</ul>

		<!-- envoyer en Ajax  -->
		<form action="" method="post">
			<div class="style-input">
				<label for="name">Nom</label>
				<input type="text" name="name" />
			</div>
			
			<div class="style-input">
				<label for="email">E-mail</label>
				<input type="email" name="email" />
			</div>
			
			<div class="style-input">
				<label for="message">Message</label>
				<textarea name="message"></textarea>
			</div>
			
			<div class="style-input">
				<label for=""></label>
				<input type="submit" value="Envoyer" />
			</div>
			
		</form>
	</section>
</div>

<script type="text/javascript"
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBvKPcuZ9lPfqHo96nWi-i_en72wgZqNQ">
</script>
<script type="text/javascript">
	function initialize() {
		var myLatlng = new google.maps.LatLng(48.845698,2.572736);
		var mapOptions = {
		  zoom: 16,
		  center: myLatlng
		}
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var image = 'img/marker.png';

		var marker = new google.maps.Marker({
		    position: myLatlng,
		    title:"My Home !",
		    animation: google.maps.Animation.DROP,
		    icon : image
		});
		google.maps.event.addListener(marker, 'click', toggleBounce);

		/*var styles = [
		  {
		    stylers: [
		      { hue: "#222222" },
        	  { saturation: -100 },
        	  { lightness : -50}
		    ]
		  },{
		    featureType: "road",
		    elementType: "geometry",
		    stylers: [
		      { visibility: "simplified" },
		      { hue: "#222222"},
		      { saturation : -100},
		      { lightness : 50}
		    ]
		  },{
		      featureType: "road",
		      elementType: "labels",
		      stylers: [
		      	  { hue: "#000"},
			      { lightness : -20}
		      ]
		    }
		];*/

		function toggleBounce() {

		  if (marker.getAnimation() != null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}

		//map.setOptions({styles: styles});
		map.setOptions({ scrollwheel: false});

		marker.setMap(map);
		
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);
</script>