const textConfig = {
  text1: "Hé lô Khương đẹp trai!",
  text2: "Tớ có điều này muốn hỏi bạn nhớ phải trả lời thật lòng nhaaa.",
  text3: `<p class="mt-3 text-white">Bạn yêu tớ có nhiều không nào 😍</p>`,
  text4: "Nếu bạn ko trả lời mà thoát ra tức là muốn làm chồng tớ rùi đó nha :v",
  text5: "Bạn mơ à???",
  text6: "Ờ, yêu",
  text7: "Lí do bạn yêu tớ đi",
  text8: "Gửi cho tớ <3",
  text9: "",
  text10: "Tớ biết mà ^^ Love zu 3000",
  text11:
    "Cảm ơn bạn đã đến bên tớ, yêu thương tớ. Mình không ở cạnh nhau nhưng vẫn yêu thương, chia sẻ niềm vui nỗi buồn cùng nhau thế là đủ rồi! Tớ vui khi thấy bạn, và thấy bạn cười 😍. Tớ cảm nhận được tình yêu bạn dành cho tớ",
  text12: "Okii lunn <3",
  text13: "Bạn không muốn nói gì với tớ à 😒! Giận 30s",
  text14: "Không yêu trả dép bố về, hic hic. Hoyyy bạn nói gì đó với tớ đi màaaaaaaaa!"
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });


  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();

    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<textarea class='form-control swal2-textarea' id='txtReason'  placeholder='Whyyy' name='w3review' rows='4'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        const value = $("#txtReason").val();
        if (value) {
          Swal.fire({
            width: 900,
            html: true,
            confirmButtonText: textConfig.text12,
            background: '#fff url("img/iput-bg.jpg")',
            title: textConfig.text10,
            html: `<p> Cảm ơn bạn đã đến bên tớ, yêu thương tớ. 
            <br /> <br/> Chúc bạn năm mới thật nhiều sức khỏe, có thêm những niềm vui mới, thành công mới, sớm hoàn thành được ước mơ của mình và gặp nhiều may mắn nhé!
            <br />🙌 Cố lên !!! Tớ đồng hành cùng bạn mà.
            <br/><span class="text-warning">Always smile and never give up!</span>
            <br /> <br/> Mình không ở cạnh nhau nhưng vẫn yêu thương, chia sẻ niềm vui nỗi buồn cùng nhau thế là đủ rồi! 
            Thật vui khi thấy bạn, và thấy bạn cười 😍. 
              Tớ cảm nhận được tình yêu bạn dành cho tớ, bao dung cho tớ những lần tớ làm lỗi nhé 😁!
            <br /> uhhhh Tớ chưa ghi lại lời tâm sự của bạn hồi nãy đâu nha, hãy nói trực tiếp với tớ!
            <br /> Thương bạn 💕💕
            </p>`, 
            confirmButtonColor: "#83d0c9",
            onClose: () => {
              window.location = "https://www.facebook.com/thukara.oke/";
            },
          });
        } else {
          Swal.fire({
            width: 900,
            confirmButtonText: "ừm!",
            background: '#fff url("img/iput-bg.jpg")',
            title: textConfig.text13,
            text: textConfig.text14,
            confirmButtonColor: "#83d0c9",
            onClose: () => {
              window.location.reload();
            },
          });
        }

      }
    }); 
  });
});
