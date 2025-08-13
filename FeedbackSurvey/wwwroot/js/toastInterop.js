window.toastInterop = {
    showToast: function (elementId) {
        var toast = document.getElementById(elementId);
        if (toast) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
            toastBootstrap.show();
        }
    }
};