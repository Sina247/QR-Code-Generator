function generateQRCode() {
	const text = document.getElementById("textInput").value.trim();
	const qrDiv = document.getElementById("qrcode");
	const downloadBtn = document.getElementById("downloadBtn");

	qrDiv.innerHTML = "";
	downloadBtn.classList.add("hidden");

	if (!text) return;

	QRCode.toCanvas(text, { width: 200 }, (err, canvas) => {
		if (err) return alert("Error generating QR Code");
		qrDiv.appendChild(canvas);
		downloadBtn.classList.remove("hidden");
	});
}

function downloadQRCode() {
	const canvas = document.querySelector("#qrcode canvas");
	const link = document.createElement("a");
	link.download = "qrcode.png";
	link.href = canvas.toDataURL("image/png");
	link.click();
}
