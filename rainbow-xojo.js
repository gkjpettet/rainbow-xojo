/**
 * Xojo syntax highlighting.
 *
 * @author Garry Pettet
 * 20 Feb 2024.
 */
 Rainbow.extend('xojo', [
     {
         name: "keyword.directive",
         pattern: /#Bad|#Else|#Elseif|#Endif|#If|#Pragma|#Ta/gi
     },
     
    {
        name: 'keyword',
        pattern: /\b(AddHandler|AddressOf|Aggregates|And|Array|As|Assigns|Async|Attributes|Await|Break|ByRef|ByVal|Call|Case|Catch|Class|Const|Continue|CType|Declare|Delegate|Dim|Do|DownTo|Each|Else|ElseIf|End|Enum|Event|Exception|Exit|Extends|False|Finally|For|Function|Global|GoTo|Handles|If|Implements|In|Inherits|Interface|Is|IsA|Lib|Loop|Me|Mod|Module|Namespace|New|Next|Nil|Not|Object|Of|Optional|Or|ParamArray|Private|Property|Protected|Public|Raise|RaiseEvent|Redim|Rem|RemoveHandler|Return|Select|Self|Shared|Soft|Static|Step|Structure|Sub|Super|Then|To|True|Try|Until|Using|Var|WeakAddressOf|Wend|While|With|Xor)\b/gi
    },
    
    {
        name: "string",
        pattern: /(".*?")/g
    },
    
    {
        name: "comment.slash",
        pattern: /\/\/.*$/gm
    },
    
    {
        name: "comment.apostrophe",
        pattern: /\'.*$/gm
    },
    
    {
        name: "comment.rem",
        pattern: /rem .*$/gmi
    },
    
    {
        name: "number.integer",
        pattern: /\b[0-9]+([eE]([+])?[0-9]+)?\b/g
    },
    
    {
        name: "number.double",
        pattern: /\b[0-9]+\.[0-9]+([eE]([+-])?[0-9]+)?\b/g
    },
    
    {
        name: "number.hex",
        pattern: /&amp;h[\da-f]+\b/gi
    },
    
    {
        name: "number.binary",
        pattern: /&amp;b[01]+\b/gi
    },

    {
        name: "number.octal",
        pattern: /&amp;o[0-7]+\b/gi
    },
    
    {
        name: "color",
        matches: [{
            matches: {
                1: "red",
                2: "green",
                3: "blue", 
                4: "alpha"
            },
            pattern: /&amp;c([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?/gi
        }],
        pattern: /&amp;c[\da-f]+\b/gi
    },
    
    {
        name: 'entity.identifier',
        pattern: /\b([a-z](\w|_)*)\b/gi
    },
]);