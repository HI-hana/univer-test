<!doctype html>
<html>
  <head>
    <meta name=”viewport” content=”width=device-width,user-scalable=no”　charset="utf-8" />
    <title>予備実験</title>
    <style>
      body{
        height:100%;
        margin:0;
      }
      #text {
        margin-top: 50px;
        font-size: 80%;
        font-weight: bold;
        color: #666;
        text-align: center;
      }
      span {
        transition: all 300ms 0s ease;
      }
      .add-blue {
        color: #00f;
      }
      div {
        text-align: center;
        margin-bottom:20px
      }
      
    </style>
  </head>
  <body>
    <p id="jap"></p>
    <p id="text"></p>
    <form name = "js">
    <div><input type = "text" name = "box" value = "spaceキーでスタート" oninput = "keyDown(e)" onfocus="if(this.value==this.defaultValue){this.value=''}"></div>
    <div><input type="button" value="このページを再読込します" onclick="window.location.reload();" /></div>
    <script src="app.js"></script>
  </body>
</html>
