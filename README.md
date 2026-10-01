# Traceback

**Understand the error. Find your next step.**

Traceback is a lightweight, browser-based programming error explainer. Choose a programming language, paste an error message, and get a plain-English explanation of what it means, why it commonly occurs, and what to try next.

## Features

- Supports **Python, JavaScript, TypeScript, Java, C++, C#, Go, Rust, and PHP**.
- Explains common errors with language-specific guidance and, where useful, a code example.
- Provides general debugging guidance when an error does not match a built-in pattern.
- Includes sample errors to try, a character counter, clear/reset controls, and copyable code examples.
- Responsive layout for desktop and mobile screens.
- Runs entirely in the browser. There is no account, server, API key, or build step.

## Use it

1. Open [`index.html`](./index.html) in a modern web browser.
2. Select the language of the program that produced the error.
3. Paste the error message into the text box.
4. Select **Explain this error**. You can also press **Ctrl+Enter** (or **Command+Enter** on Mac).

Select one of the example buttons to see an explanation right away.

## Run locally

Clone or download this repository, then open `index.html` in your browser. The app is made from static HTML, CSS, and JavaScript, so no dependencies need to be installed.

The files are:

| File | Purpose |
| --- | --- |
| [`index.html`](./index.html) | Page structure and accessible form controls |
| [`styles.css`](./styles.css) | Responsive visual styling |
| [`app.js`](./app.js) | Error matching, explanations, and interactions |

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the application structure, explanation flow, and guidance for extending error rules.

## Publish with GitHub Pages

This is a static website and can be hosted with GitHub Pages:

1. Push the project files to a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing the project and the repository root (`/`) as the folder, then save.
5. After deployment completes, open the Pages URL shown in the repository settings.

## How explanations work

Traceback matches the selected language and pasted message against a set of common error patterns in `app.js`. A matching pattern provides an explanation, likely cause, and practical suggestion. Some patterns include a short example.

If no pattern matches, Traceback offers general debugging guidance rather than claiming to have diagnosed the issue. For the best results, include the complete error message and stack trace. The tool does not execute or upload the pasted text.

## Limitations

- Explanations are based on built-in patterns, not an AI model or a full analysis of your source code.
- An error's cause depends on the surrounding code and runtime context; suggestions are starting points, not guaranteed fixes.
- Error formats vary between language versions, tools, and environments, so not every message will match.

## License

No license has been specified yet. Add a `LICENSE` file before distributing this project if you want to grant others explicit permission to use, modify, or redistribute it.
