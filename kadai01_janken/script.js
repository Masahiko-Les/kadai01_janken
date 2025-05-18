//手の状態と勝った数を記憶する変数
let MY_STATE="";
let PC_STATE="";
let MY_WIN=0;
let PC_WIN=0;

// コンピュータの手をランダムに出力する関数ああああ
function PC_HANDS(){
    const num = Math.ceil(Math.random()*3);
    switch(num){
        case 1:
            $("#PC_hands").html('<img src="img/janken_gu.png" alt="グー" class="pic1">');
            PC_STATE="gu";
            break;
        case 2:
            $("#PC_hands").html('<img src="img/janken_choki.png" alt="チョキ" class="pic1">');
            PC_STATE="cho";
            break;
        case 3:
            $("#PC_hands").html('<img src="img/janken_pa.png" alt="パー" class="pic1">');
            PC_STATE="pa";
            break;
    }
}

//「じゃん、けん、ぽん！」を表示して、コンピュータの手を出力し、結果も表示する関数。
function START(){
    RESET();
    setTimeout(function(){$("#PC_Comment").html("いくよ～")},0);    
    setTimeout(function(){$("#PC_Comment").html("じゃん！")},1000);
    setTimeout(function(){$("#PC_Comment").html("けん！")},2000);
    setTimeout(function(){$("#PC_Comment").html("ぽん！")},3000);
    setTimeout(function(){PC_HANDS()},3000);
    setTimeout(function(){RESULT()},4000);  
};
//スタート前にリセットする関数
function RESET(){
    $("#PC_hands").html("");//じゃんけんの手の表示をリセット
}

//結果の判定をして表示する関数
function RESULT(){
    if(MY_STATE==PC_STATE){
        $("#PC_Comment").html("あいこだね、もう一回！");
    }
    if(MY_STATE=="gu" && PC_STATE=="cho"){
        MY_WIN++;
        $("#PC_Comment").html("メイの負け～、もう一回やろ！");
    }
    if(MY_STATE=="gu" && PC_STATE=="pa"){
        PC_WIN++;
        $("#PC_Comment").html("メイの勝ち～！！");
    }
    if(MY_STATE=="cho" && PC_STATE=="gu"){
        PC_WIN++;
        $("#PC_Comment").html("メイの勝ち～！！");
    }
    if(MY_STATE=="cho" && PC_STATE=="pa"){
        MY_WIN++;
        $("#PC_Comment").html("メイの負け～、もう一回やろ！");
    }
    if(MY_STATE=="pa" && PC_STATE=="gu"){
        MY_WIN++;
        $("#PC_Comment").html("メイの負け～、もう一回やろ！");
    }
    if(MY_STATE=="pa" && PC_STATE=="cho"){
        PC_WIN++;
        $("#PC_Comment").html("メイの勝ち～！！");
    }

    $("#judgment").html(`[勝った数]メイ:${PC_WIN}回 あなた:${MY_WIN}回`);
};

//自分がグーを押したとき
$("#gu_btn").on("click",function(){
    MY_STATE="gu";
    START();
});
//自分がチョキを押したとき
$("#cho_btn").on("click",function(){
    MY_STATE="cho";
    START();
});
//自分がパーを押したとき
$("#par_btn").on("click",function(){
    MY_STATE="pa";
    START();
});
