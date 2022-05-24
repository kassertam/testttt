// JavaScript Document
$(document).ready(function(e) {
	var i=1;
    $("#myBtn").click(function(){
		$("#myModal").modal(); 
	
	});
//Kiểm tra Ten
function kiemTraTen(){
	var re = /^[A-Z][A-Za-z]+(\s[A-Z][A-Za-z]+)*$/;
	if($("#txtTen").val() == ""){
		$("#tbTen").html("*Bắt buộc nhập !");
		return false;
	}
	if(!re.test($("#txtTen").val())){
		$("#tbTen").html("* Có thể có khoảng trắng và ký tự đầu in hoa");
		return false;
	}
	$("#tbTen").html("");
	return true;
}
$("#txtTen").blur(kiemTraTen);

function KiemTraNgay(){
	if($("#txtNgay").val() == ""){
		$("#tbNgay").html("* Bắt buộc nhập");
		return false;
	}
	var day = new Date($("#txtNgay").val());
	var today = new Date();
	today.setDate(today.getDate() +  7);
	if(day < today){
		$("#tbNgay").html("* Ngày khởi hành phi sau ngày hiện tại 7 ngày trở lên");
		return false;
	}
	$("#tbNgay").html("");
	return true;
};
$("#txtNgay").blur(KiemTraNgay);
function kiemSDT(){
	var re = /^(09|08|07)[\d]{8}$/;
	if($("#txtSDT").val() == ""){
		$("#tbSDT").html("*Bắt buộc nhập !");
		return false;
	}
	if(!re.test($("#txtSDT").val())){
		$("#tbSDT").html("*số điênh thoại gồm 10 số bắt đầu (07|08|09)");
		return false;
	}
	$("#tbSDT").html("");
	return true;

};
$("#txtSDT").blur(kiemSDT);

	$("#btnSave").click(function () {
	// 	if(!KiemTraMa() || !KiemTraHanhTrinh() || !KiemTraNgay() || !KiemTraThoiGian() || !KiemTraGia()){
	// 		$("#thongbao").html("Mời bạn nhập đúng và đủ thông tin");
	// 		return false;
	// }
	
	var hoten = $("#txtTen").val();
	var ngay = $("#txtNgay").val();
	var sdt = $("#txtSDT").val();
	var s = $("#txtPhuThu").val();
	var doclenBang = "<tr><td>" + (i++) + "</td><td>" + hoten + "</td><td>" + ngay + "</td><td>" + sdt + "</td><td>" + s + "</td><td>" 
	+ '' + "</td></tr>";
	$("table").append(doclenBang);
	$("#myModal").modal("hide");
  	return true;
	
	});
});