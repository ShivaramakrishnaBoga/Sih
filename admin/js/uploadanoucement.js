// Handle Tag Selection for Tech Stack
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const input = document.getElementById('tech-stack-input');
        let tags = input.value.split(',').map(tag => tag.trim()).filter(Boolean);

        if (tag.textContent === "Other") {
            const customTag = prompt("Enter your custom tech stack:");
            if (customTag && !tags.includes(customTag)) {
                tags.push(customTag);
            }
        } else if (!tags.includes(tag.textContent)) {
            tags.push(tag.textContent);
        }

        input.value = tags.join(', ');
    });
});
// Generalized Drag-and-Drop Functionality
function setupDragAndDrop(areaId, inputId, linkContainerId, validTypes = [], fileLimit = null) {
    const area = document.getElementById(areaId);
    const input = document.getElementById(inputId);
    const container = document.getElementById(linkContainerId);
    const uploadedFiles = []; // To track files when fileLimit is applied

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
            if (validTypes.length && !validTypes.some(type => file.type.startsWith(type))) {
                displayError(`${file.name} is not a valid file type.`);
                return;
            }

            if (fileLimit !== null && uploadedFiles.length >= fileLimit) {
                alert(`File limit reached! You can only upload up to ${fileLimit} files.`);
                return;
            }

            uploadedFiles.push(file);
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

    // Display error messages
    function displayError(message) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = message;
        errorMsg.style.color = 'red';
        container.appendChild(errorMsg);
    }
}

// Setting up the Drag-and-Drop Areas
setupDragAndDrop('thumbnail-box', 'thumbnail-input', 'thumbnail-links', ['image/', 'video/'], 1); // Thumbnail (Single file)
setupDragAndDrop('ppt-box', 'ppt-input', 'ppt-links', [], 3); // Template PPT (Max 3 files)
setupDragAndDrop('docs-box', 'docs-input', 'docs-links', [], 3); // Template Docs (Max 3 files)
setupDragAndDrop('rules-box', 'rules-input', 'rules-links', [], 5); // Rules & Regulations (Max 5 files)
