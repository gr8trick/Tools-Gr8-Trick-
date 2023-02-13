      function escapeHTML() {
        document.getElementById("output").value =
          document.getElementById("input").value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
      }
      
      function unescapeHTML() {
        document.getElementById("output").value =
          document.getElementById("input").value
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
      }
      
      function copyText() {
        document.getElementById("output").select();
        document.execCommand("copy");
      }