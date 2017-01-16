<!DOCTYPE html>
<html>
<head>
    <base href="/" />
    <title>Springboot with angular2 with jwt</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap css -->

    <!-- application css -->
    <link href="app/css/thirdParty/bootstrap.css" rel="stylesheet" />
    <link href="app/css/innerBase.css" rel="stylesheet" />

    <!-- polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
 	<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/system-trace/trace.js"></script>
    <script src="node_modules/system-trace/trace.js"></script>
      <script src="node_modules/jquery/dist/jquery.min.js"></script>  
    <script src="systemjs.config.js"></script>
     <script>document.write('<base href="#" />');</script>
 <!--     <script>
  System.set("@loader", System.newModule({ default: System, __useDefault: true }));
  System.paths["live-reload"] = "node_modules/system-live-reload/live.js";
  System.liveReloadPort = 9999; // This is optional, defaults to 8012
 
  System.import("live-reload").then(function(){
	  System.import('app').catch(function (err) { console.error(err); });
 
  });
</script>  -->
     
    <script>
        System.import('app').catch(function (err) { console.error(err); });
    </script> 
   
</head>
<body>
    <root-app>Loading...</root-app>
</body>
</html>
