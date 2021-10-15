console.debug("Iniciado");

// Global Variables

/**@type HTMLInputElement */
const $formFloatingEmail = document.querySelector("#form-floating-email");
/**@type HTMLInputElement */
const $formFloatingPassword = document.querySelector("#form-floating-password");
/**@type HTMLFormElement */
const $form = document.querySelector("#form");

// Functions

function formFloatingPasswordListener(event) {
  const pwdStrengthClasses = {
    weak: "pwd-strength--weak",
    soSo: "pwd-strength--so-so",
    good: "pwd-strength--good",
  };

  const regexs = {
    // Letras, Numeros ou Letras e Carateres Especiais ou Numeros e Caracteres Especiais
    soSo: /(?=.*[A-Za-z])(?=.*\W)|(?=.*\D)(?=.*\d)|(?=.*\W)(?=.*\d)/,
    // Letras, Numeros e Caracteres especiais
    // good: /(?=.*[A-Za-z])(?=.*\d)(?=.*\W)/,
    good: /(?=^.{3,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Za-z]).*$/,
  };

  const currentPwd = event.target.value;
  console.debug(currentPwd);
  const $pwdStrength = document.querySelector("#pwd-strength");
  $pwdStrength.classList.remove(
    pwdStrengthClasses.weak,
    pwdStrengthClasses.soSo,
    pwdStrengthClasses.good
  );

  if (!currentPwd) {
    console.debug("vazio");
  } else if (regexs.good.test(currentPwd)) {
    console.debug("good");
    $pwdStrength.classList.add(pwdStrengthClasses.good);
  } else if (regexs.soSo.test(currentPwd)) {
    console.debug("soso");
    $pwdStrength.classList.add(pwdStrengthClasses.soSo);
  } else {
    console.debug("weak");
    $pwdStrength.classList.add(pwdStrengthClasses.weak);
  }
}

function formSubmitListener(event) {
  event.preventDefault();
  const valid = $form.checkValidity();
  console.debug(valid);
  $form.classList.add("was-validated");
  if (!valid) {
    $form.reportValidity();
    return;
  }

  // Form válido, tenta cadastra o usuario
  try {
    const email = $formFloatingEmail.value;
    registerUser(email, $formFloatingPassword.value);
    showAlert("Sucesso", `Agora você possui um cadastro no site de repúblicas!`);
  } catch (error) {
    console.debug(error);
    showAlert(undefined, error.message, "error");
  }
}

function redirectIfLoggedUser() {
  if (checkLoggedUser()) {
    showPersistentAlert(undefined, "Usuário já logado, redirecionando...");
  }
}

// Event listeners

$formFloatingPassword.addEventListener("change", formFloatingPasswordListener);
$formFloatingPassword.addEventListener("input", formFloatingPasswordListener);
$form.addEventListener("submit", formSubmitListener);

// Actions
redirectIfLoggedUser();
