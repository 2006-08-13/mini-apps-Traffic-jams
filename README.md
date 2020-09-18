
<html lang="en">
	<head>
			<title>Traffic-jams</title>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover">
			<meta name="theme-color" content="#000000">
			<meta content="IE=Edge" http-equiv="X-UA-Compatible">
			

	   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script src="https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU" type="text/javascript">
    </script>
    <script type="text/javascript">
        ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            });
        }
    </script>
</head>

<body>
    <div id="map" style="width: 100%; height: 700px"></div>
	<div id="root"></div>
</body>
</html>

