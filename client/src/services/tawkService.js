export function initializeTawk() {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function () {
      window.Tawk_API.hideWidget();
    };
  }
  
  export function associateTawkVisitor(userId) {
    window.Tawk_API.setAttributes({
      'User ID': userId,
    });
  }
  