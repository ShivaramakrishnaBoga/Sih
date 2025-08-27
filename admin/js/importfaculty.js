// Generalized Drag-and-Drop Functionality
function setupDragAndDrop(areaId, inputId, linkContainerId, fileLimit = null) {
    const area = document.getElementById(areaId);
    const input = document.getElementById(inputId);
    const container = document.getElementById(linkContainerId);
    const uploadedFiles = []; // To track uploaded files

    // Handle click to open file dialog
    area.addEventListener('click', () => input.click());

    // Drag over event
    area.addEventListener('dragover', event => {
        event.preventDefault();
        area.classList.add('dragover');
    });

    // Drag leave event
    area.addEventListener('dragleave', () => {
        area.classList.remove('dragover');
    });

    // Drop event
    area.addEventListener('drop', event => {
        event.preventDefault();
        area.classList.remove('dragover');
        processFiles(event.dataTransfer.files);
    });

    // Change event for file input
    input.addEventListener('change', () => {
        processFiles(input.files);
    });

    // File processing
    function processFiles(files) {
        Array.from(files).forEach(file => {
            if (fileLimit !== null && uploadedFiles.length >= fileLimit) {
                alert(`File limit reached! You can only upload up to ${fileLimit} files.`);
                return;
            }

            uploadedFiles.push(file);

            // Display file as a download link
            const link = document.createElement('a');
            link.href = URL.createObjectURL(file);
            link.target = '_blank';
            link.download = file.name;
            link.textContent = file.name;
            link.style.display = 'block';
            link.style.marginTop = '5px';
            container.appendChild(link);
        });
    }

    // Display error messages (Optional)
    function displayError(message) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = message;
        errorMsg.style.color = 'red';
        container.appendChild(errorMsg);
    }
}

// Setting up the Drag-and-Drop for Upload Student Data
setupDragAndDrop('docs-box', 'docs-input', 'docs-links', null);
