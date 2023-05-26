const icons = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
}

function showAlert(title, icons, position) {
  const successAlert = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (e) => {
      e.addEventListener("mouseenter", Swal.stopTimer)
      e.addEventListener("mouseleave", Swal.resumeTimer)
    },
  })

  successAlert.fire({
    icon: icons,
    title: title,
  })
}

export { icons, showAlert }
