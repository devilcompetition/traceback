const rules = {
  python: [
    {
      pattern: /\bNameError\b|name ['"][^'"]+['"] is not defined/i,
      meaning: "Python tried to use a name that doesn't exist in the current scope.",
      cause: "The name may be misspelled, not assigned yet, or defined inside a different function or block.",
      solution: "Check the spelling and capitalization, then make sure the variable or function is defined before this line runs.",
      example: "print('Hello, world!')\n# Check that every name you use has been defined."
    },
    {
      pattern: /\bTypeError\b|unsupported operand type|object is not (?:subscriptable|callable)/i,
      meaning: "An operation received a value of a type it cannot work with.",
      cause: "For example, code may be adding a string to a number, calling a value that isn't a function, or using a value in an unsupported operation.",
      solution: "Inspect the values on the reported line and their types. Convert a value if needed, or adjust the operation to match the types."
    },
    {
      pattern: /\bIndexError\b|list index out of range/i,
      meaning: "Your code tried to access a list position that doesn't exist.",
      cause: "List indexes start at 0, and the last valid index is one less than the list's length. An empty list has no valid indexes.",
      solution: "Check the list length before indexing, or iterate over the items instead of using an unchecked index.",
      example: "if items:\n    first_item = items[0]"
    },
    {
      pattern: /\bKeyError\b/i,
      meaning: "The requested key wasn't found in a dictionary.",
      cause: "The key may be spelled differently, missing from this particular dictionary, or not present in the input data.",
      solution: "Check which keys are present, or use dict.get() when a missing key should have a default value.",
      example: "name = user.get('name', 'Unknown')"
    },
    {
      pattern: /\bAttributeError\b/i,
      meaning: "The value doesn't have the attribute or method your code tried to use.",
      cause: "The object may be a different type than expected, may not have been initialized, or may be None.",
      solution: "Check the value and its type just before this line. Verify the attribute name and handle None if the value is optional."
    },
    {
      pattern: /\bSyntaxError\b|\bIndentationError\b/i,
      meaning: "Python couldn't parse the code, so it couldn't start running it.",
      cause: "A missing colon or bracket, an unexpected character, or inconsistent indentation can make Python syntax invalid.",
      solution: "Start at the reported line and check it along with the line just before it. Match brackets and keep indentation consistent."
    },
    {
      pattern: /\bModuleNotFoundError\b|\bImportError\b/i,
      meaning: "Python couldn't find or import the requested module.",
      cause: "The package may not be installed in the active environment, the module name may be misspelled, or the import may refer to a local file that isn't on the path.",
      solution: "Check the import spelling and which Python environment is running your code. Install the package in that same environment if it is a third-party dependency."
    },
    {
      pattern: /\bZeroDivisionError\b/i,
      meaning: "A number was divided by zero.",
      cause: "The denominator evaluated to 0, which Python doesn't allow for ordinary division.",
      solution: "Check the denominator before dividing and decide what your program should do when it is zero.",
      example: "if denominator != 0:\n    result = numerator / denominator"
    },
    {
      pattern: /\bValueError\b/i,
      meaning: "A function received a value of the right general type, but the value itself was not acceptable.",
      cause: "This often happens when converting text to a number or passing a value outside the function's allowed range.",
      solution: "Inspect the exact value passed on the reported line. Validate or normalize the input before converting or using it."
    }
  ],
  javascript: [
    {
      pattern: /Cannot read propert(?:y|ies) of (?:undefined|null)|Cannot read propert(?:y|ies) ['"].+?['"] of (?:undefined|null)/i,
      meaning: "Your code tried to read a property from a value that is undefined or null.",
      cause: "The value may not have been assigned yet, may be missing from an API response, or may not exist on a particular code path.",
      solution: "Trace where the value is set, then check it before accessing the property. Optional chaining can help when the value is legitimately absent.",
      example: "const name = user?.name ?? 'Guest';"
    },
    {
      pattern: /\bReferenceError\b|is not defined/i,
      meaning: "JavaScript encountered a variable or function name that isn't defined in the current scope.",
      cause: "The name may be misspelled, out of scope, not imported, or used before it is declared.",
      solution: "Check spelling and capitalization, confirm the declaration or import exists, and make sure the name is in scope here."
    },
    {
      pattern: /\bTypeError\b/i,
      meaning: "An operation was attempted on a value of an incompatible type.",
      cause: "A value may be nullish, a function may be called incorrectly, or code may assume a value is an array or object when it isn't.",
      solution: "Inspect the value and its type at the failing line. Validate it before the operation, and check whether the input can be missing or have a different shape."
    },
    {
      pattern: /\bSyntaxError\b|Unexpected token|Unexpected end of input/i,
      meaning: "JavaScript couldn't parse the code.",
      cause: "A bracket, quote, comma, or other syntax element may be missing or in the wrong place.",
      solution: "Check the reported line and the lines immediately above it. Balance brackets and quotes, and verify object or function syntax."
    },
    {
      pattern: /\bRangeError\b/i,
      meaning: "A value or operation is outside the range JavaScript can handle.",
      cause: "This can happen with an invalid array length, an excessively deep recursive call, or a number outside an allowed range.",
      solution: "Check the value passed to the operation and add a sensible range limit. If the stack overflowed, look for a recursive call that doesn't reach its stopping condition."
    },
    {
      pattern: /\bURIError\b/i,
      meaning: "A URI encoding or decoding operation received malformed input.",
      cause: "The input may contain an invalid percent escape or otherwise not be correctly encoded.",
      solution: "Validate and consistently encode the input before decoding it. Check that each percent escape is followed by two hexadecimal digits."
    }
  ],
  typescript: [
    {
      pattern: /TS\d+|Type '.+' is not assignable to type|Property '.+' does not exist on type/i,
      meaning: "TypeScript found a mismatch between the type your code promises and the value or property it actually uses.",
      cause: "A value may have the wrong type, a property may not exist on every member of a union, or a value may be possibly null or undefined.",
      solution: "Read the type name and source location in the diagnostic. Narrow the type with a check, correct the declared type, or handle the missing case explicitly."
    },
    {
      pattern: /\bReferenceError\b|Cannot read propert(?:y|ies) of (?:undefined|null)/i,
      meaning: "This runtime error means a name is missing, or a property is being read from null or undefined.",
      cause: "Type checking may not catch every runtime value, particularly when input comes from JavaScript, an API, or an unsafe type assertion.",
      solution: "Check that the name is declared and in scope, or guard the value before accessing its property. Prefer accurate types over bypassing the checker."
    }
  ],
  java: [
    {
      pattern: /NullPointerException/i,
      meaning: "Java tried to use an object reference that is null.",
      cause: "The reference was never initialized, a lookup returned null, or a method returned null unexpectedly.",
      solution: "Find the first application-code line in the stack trace. Check which reference on that line is null and initialize it or handle the missing value."
    },
    {
      pattern: /ArrayIndexOutOfBoundsException|IndexOutOfBoundsException/i,
      meaning: "Code tried to access a position outside an array or collection's valid indexes.",
      cause: "Indexes start at 0; the final valid index is size minus one. The collection could also be empty.",
      solution: "Check the collection size and ensure the index is at least 0 and less than the size before accessing it."
    },
    {
      pattern: /cannot find symbol|symbol:.*(?:class|method|variable)|ClassNotFoundException/i,
      meaning: "The compiler or runtime cannot find the referenced class, method, or variable.",
      cause: "A name may be misspelled, an import may be missing, or a required dependency may not be on the classpath.",
      solution: "Verify the name and package, add the correct import, and check that the dependency is available to your build."
    },
    {
      pattern: /ClassCastException/i,
      meaning: "Java could not convert an object to the type your code requested.",
      cause: "The object's actual runtime type is not compatible with the cast, even if the cast looks plausible from its declared type.",
      solution: "Check the object's runtime type before casting, or use a type-safe design such as generics or pattern matching."
    },
    {
      pattern: /NumberFormatException/i,
      meaning: "Java could not parse the provided text as the requested number.",
      cause: "The string may contain non-numeric characters, whitespace, or a number outside the supported format.",
      solution: "Validate and trim the input before parsing, and handle NumberFormatException when the input may not be numeric."
    },
    {
      pattern: /Exception in thread|at [\w.$]+\([^)]*:\d+\)/i,
      meaning: "The program threw an exception. The stack trace shows the chain of calls leading to it.",
      cause: "The exception name and message describe what failed; the first stack-trace line from your own code usually identifies where.",
      solution: "Start with the exception name and message, then inspect the first stack-trace frame in your code. Fix the cause there rather than only catching the exception."
    }
  ],
  cpp: [
    {
      pattern: /segmentation fault|SIGSEGV|access violation/i,
      meaning: "The program tried to read or write memory it is not allowed to access.",
      cause: "Common causes include a null or dangling pointer, an out-of-bounds array access, or using an object after it has been freed.",
      solution: "Inspect the failing line and the lifetime and bounds of every pointer or reference it uses. A debugger or address sanitizer can help identify the invalid access."
    },
    {
      pattern: /undefined reference|unresolved external symbol/i,
      meaning: "The linker found a declaration but could not find the corresponding compiled definition.",
      cause: "The source file with the function definition may not be part of the build, or the declaration and definition signatures may not match.",
      solution: "Add the defining source file or library to your build command, then confirm the declaration and definition have matching signatures."
    },
    {
      pattern: /no matching function for call|cannot convert .* to|invalid conversion/i,
      meaning: "The compiler couldn't find a function overload that accepts the arguments you supplied.",
      cause: "The argument types, number, or constness may not match any available function signature.",
      solution: "Compare the call with the function declaration. Pass compatible types or define an overload that matches the intended arguments."
    },
    {
      pattern: /expected ['"].*['"] before|expected .* before|syntax error/i,
      meaning: "The compiler encountered code that doesn't fit the language grammar.",
      cause: "A semicolon, brace, parenthesis, declaration, or include may be missing or misplaced. The reported line can be after the real mistake.",
      solution: "Check the reported line and the lines just before it. Balance braces and parentheses and verify declarations end where expected."
    },
    {
      pattern: /out_of_range|std::out_of_range/i,
      meaning: "A checked container or conversion operation encountered a value outside its valid range.",
      cause: "An index, position, or parsed value may exceed the limits expected by the operation.",
      solution: "Check the value and container size before the operation, then handle the out-of-range case explicitly."
    }
  ],
  csharp: [
    {
      pattern: /NullReferenceException/i,
      meaning: "Your code tried to use an object reference that is null.",
      cause: "The object may not have been initialized, a lookup may have returned null, or a method may return null on some paths.",
      solution: "Inspect the line named in the stack trace and identify which reference is null. Initialize it or handle the null case before accessing members."
    },
    {
      pattern: /IndexOutOfRangeException|ArgumentOutOfRangeException/i,
      meaning: "An index or argument is outside the valid range for the array or collection.",
      cause: "The index may be negative, equal to or greater than the collection length, or the collection may be empty.",
      solution: "Check that the index is between 0 and Length/Count - 1 before accessing the item."
    },
    {
      pattern: /CS\d+|does not exist in the current context|cannot convert/i,
      meaning: "The C# compiler found a missing name, incompatible type, or other compile-time issue.",
      cause: "A name may be out of scope or misspelled, or a value may not match the type expected by the operation.",
      solution: "Read the CS error code and source location. Check the declaration, namespace/import, and expected versus actual types."
    },
    {
      pattern: /InvalidCastException/i,
      meaning: "The runtime could not convert an object to the requested type.",
      cause: "The object's actual type is incompatible with the cast.",
      solution: "Check the object's type before converting, or use pattern matching and handle the case where the conversion is not possible."
    },
    {
      pattern: /FormatException|Input string was not in a correct format/i,
      meaning: "A value could not be parsed because it doesn't match the expected format.",
      cause: "The input may contain unexpected characters or may use a number or date format different from the current culture.",
      solution: "Validate the input, use TryParse for user-provided values, and specify a culture when the format should be consistent."
    }
  ],
  go: [
    {
      pattern: /panic: runtime error: invalid memory address|nil pointer dereference/i,
      meaning: "Go code tried to use a pointer or interface value that is nil.",
      cause: "A value may not have been initialized, a lookup may have failed, or a function may return a nil result.",
      solution: "Check the value before dereferencing it and handle the nil case where it is produced. Read the stack trace to find the first line in your code."
    },
    {
      pattern: /index out of range/i,
      meaning: "Code tried to access an array, slice, or string outside its valid bounds.",
      cause: "Valid indexes start at 0 and stop before len(value). The slice or string may be empty.",
      solution: "Check len(value) before indexing, or iterate with range so the loop stays within the available elements."
    },
    {
      pattern: /undefined:|cannot use .* as .* in/i,
      meaning: "The Go compiler cannot find a name or cannot use a value where a different type is expected.",
      cause: "A name may be misspelled or out of scope, or Go's distinct types may not be directly interchangeable.",
      solution: "Check the spelling and imports, then compare the value's type with the expected type. Add a deliberate conversion only when it is valid."
    },
    {
      pattern: /assignment mismatch|multiple-value .* in single-value context/i,
      meaning: "The number of values returned or assigned doesn't match what the code expects.",
      cause: "A Go function may return multiple values, commonly a result and an error, but the call site handles a different number.",
      solution: "Match the assignment to the function's return values, and handle any returned error explicitly."
    }
  ],
  rust: [
    {
      pattern: /cannot borrow .* as mutable|cannot borrow .* as immutable/i,
      meaning: "Rust's borrowing rules prevent this reference from being used in the requested way.",
      cause: "Rust does not allow an immutable and mutable borrow of the same value to overlap, or more than one mutable borrow at the same time.",
      solution: "Shorten the borrow's lifetime, avoid using the earlier reference while mutating, or restructure the code so the mutation happens before or after the borrow."
    },
    {
      pattern: /mismatched types|expected .+ found/i,
      meaning: "An expression produced a different type than the code expects.",
      cause: "Rust does not automatically convert many types, and a branch or function return may not match the declared type.",
      solution: "Compare the expected and found types in the diagnostic. Convert explicitly when appropriate, or change the expression or return type to match."
    },
    {
      pattern: /use of moved value|value borrowed here after move/i,
      meaning: "The code is trying to use a value after ownership has moved elsewhere.",
      cause: "Passing or assigning a non-Copy value can transfer ownership, leaving the original binding unavailable.",
      solution: "Borrow the value with a reference if ownership should remain, clone it if a separate copy is needed, or restructure who owns the value."
    },
    {
      pattern: /unwrap\(\) on an? `?`?None value|called `Option::unwrap\(\)` on a `None` value|called `Result::unwrap\(\)` on an `Err` value|panicked at/i,
      meaning: "The program panicked because it tried to unwrap a missing value or an error result.",
      cause: "The code assumed an Option was Some or a Result was Ok when that assumption was false.",
      solution: "Handle the None or Err case explicitly with match, if let, or the ? operator in a function that returns a compatible Result."
    },
    {
      pattern: /cannot find (?:value|function|type|crate) in this scope/i,
      meaning: "Rust cannot find the named item where it is being used.",
      cause: "The item may be misspelled, not imported into the current module, or private to another module.",
      solution: "Check the spelling and scope, add the needed use statement, or make the item accessible from this module."
    }
  ],
  php: [
    {
      pattern: /Undefined (?:variable|array key|index)|Undefined variable/i,
      meaning: "PHP code tried to use a variable or array key that hasn't been defined.",
      cause: "The variable may not be initialized on this path, the name may be misspelled, or the input array may not contain that key.",
      solution: "Initialize the variable before use, check that the key exists, or provide a default with the null coalescing operator."
    },
    {
      pattern: /Call to a member function .* on null/i,
      meaning: "PHP tried to call a method on a null value instead of an object.",
      cause: "A lookup or function returned null, or the object was not created before the method call.",
      solution: "Check where the value comes from and verify it is an object before calling the method. Handle the missing-value case explicitly."
    },
    {
      pattern: /Parse error|syntax error, unexpected/i,
      meaning: "PHP could not parse the source code.",
      cause: "A bracket, semicolon, quote, or language construct may be missing or out of place. The true mistake may be on the preceding line.",
      solution: "Inspect the reported line and the line above it. Balance brackets and quotes, and check statement endings."
    },
    {
      pattern: /TypeError|ArgumentCountError|Argument .* must be of type/i,
      meaning: "A function or operation received a value with the wrong type or number of arguments.",
      cause: "The supplied value may not match the parameter type, or the function call may omit a required argument.",
      solution: "Compare the call with the function signature and pass the expected arguments and types. Validate external input before passing it in."
    },
    {
      pattern: /Class ['"].+?['"] not found|Call to undefined function|Call to undefined method/i,
      meaning: "PHP cannot find the class, function, or method your code is trying to use.",
      cause: "The name may be misspelled, the file or package may not be loaded, or the method may not exist on that class.",
      solution: "Check the name and namespace, confirm the file or dependency is loaded, and verify the function or method is defined."
    }
  ]
};

const languageNames = {
  python: "Python",
  javascript: "JavaScript",
  typescript: "TypeScript",
  java: "Java",
  cpp: "C++",
  csharp: "C#",
  go: "Go",
  rust: "Rust",
  php: "PHP"
};

const input = document.querySelector("#error-input");
const languageSelect = document.querySelector("#language");
const count = document.querySelector("#char-count");
const message = document.querySelector("#form-message");
const emptyState = document.querySelector("#result-empty");
const result = document.querySelector("#result-content");
const copyButton = document.querySelector("#copy-button");

function findRule(language, error) {
  return (rules[language] || []).find((rule) => rule.pattern.test(error));
}

function generalGuidance(language) {
  const names = {
    javascript: "JavaScript",
    typescript: "TypeScript",
    cpp: "C++",
    csharp: "C#"
  };
  const name = names[language] || language.charAt(0).toUpperCase() + language.slice(1);
  return {
    meaning: `This ${name} error indicates that an operation in your program could not complete. The exact meaning depends on the error type and the line where it occurred.`,
    cause: "The key details are usually the first error type or code and the first line of the stack trace that points to your own code. Those show what failed and where.",
    solution: "Start at that line and inspect the values being used. Check for missing or unexpected input, invalid types, and boundary cases. If you share the error type and the relevant code around that line, the cause can be narrowed down.",
    example: ""
  };
}

function explain() {
  const error = input.value.trim();
  message.textContent = "";

  if (!error) {
    message.textContent = "Paste an error message first, and I’ll help you make sense of it.";
    input.focus();
    return;
  }

  const language = languageSelect.value;
  const rule = findRule(language, error);
  const guidance = rule || generalGuidance(language);

  document.querySelector("#error-preview").textContent = error;
  document.querySelector("#meaning").textContent = guidance.meaning;
  document.querySelector("#cause").textContent = guidance.cause;
  document.querySelector("#solution").textContent = guidance.solution;
  document.querySelector("#match-badge").textContent = rule ? "COMMON ERROR MATCH" : "GENERAL GUIDANCE";
  document.querySelector("#code-example").textContent = guidance.example || "";
  document.querySelector("#code-wrap").hidden = !guidance.example;
  document.querySelector("#result-disclaimer").textContent = rule
    ? "A helpful starting point based on a common error pattern. Check the suggested fix against your code."
    : "This message did not match a built-in pattern. Guidance is general; share the relevant code for a more precise diagnosis.";
  emptyState.hidden = true;
  result.hidden = false;
}

document.querySelector("#analyze-button").addEventListener("click", explain);

input.addEventListener("input", () => {
  count.textContent = `${input.value.length.toLocaleString()} / 10,000`;
  message.textContent = "";
});

input.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    explain();
  }
});

document.querySelector("#clear-button").addEventListener("click", () => {
  input.value = "";
  count.textContent = "0 / 10,000";
  message.textContent = "";
  result.hidden = true;
  emptyState.hidden = false;
  input.focus();
});

document.querySelectorAll(".example-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    languageSelect.value = chip.dataset.language;
    input.value = chip.dataset.example;
    count.textContent = `${input.value.length} / 10,000`;
    explain();
  });
});

copyButton.addEventListener("click", async () => {
  const originalLabel = "Copy";
  try {
    await navigator.clipboard.writeText(document.querySelector("#code-example").textContent);
    copyButton.textContent = "Copied!";
    window.setTimeout(() => { copyButton.textContent = originalLabel; }, 1600);
  } catch {
    copyButton.textContent = "Copy unavailable";
    window.setTimeout(() => { copyButton.textContent = originalLabel; }, 2200);
  }
});
