/**
 * Xojo language patterns
 *
 * @author Dr Garry Pettet
 */
Rainbow.extend('xojo', [
    {
        name: 'comment',
        pattern: /(\/\/|rem|').*$/igm
    },

    {
        name: 'operator',
        pattern: /&(gt|lt);|[+-/*=<>^]/g
    },

    // Numbers
    {
        name: 'number.double',
        pattern: /\b\d+\.\d*([e][-+]*\d+)?\b/gi
    },
    {
        name: 'number.integer',
        pattern: /\b(\d+\.?\d*([e][-+]*\d+)?)|((&amp;)h[A-Fa-f0-9]+)\b|((&amp;)b[01]+)\b|((&amp;)o[0-7]+)\b/gi
    },

    // Colours
    {
        matches: {
            1: 'color.operator',
            2: 'color.red',
            3: 'color.green',
            4: 'color.blue',
            5: 'color.alpha'         
        },
        pattern: /(&amp;c)([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})\b/gi
    },

    // Types and keywords.
    {
        name: 'keyword.type',
        pattern: /\b(Boolean|True|False|String|Text|Integer|Double|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64)\b/gi
    },
    {
        name: 'keyword',
        pattern: /\b(AddHandler|AddressOf|And|Array|As|Assigns|Break|ByRef|ByVal|Call|Case|Catch|Class|Const|Continue|CType|Declare|Delegate|Dim|Do|DownTo|Each|Else|ElseIf|End|Enum|Event|Exception|Exit|Extends|Finally|For|Function|Global|GoTo|If|Implements|In|Inherits|Interface|Is|IsA|Lib|Loop|Me|Mod|Module|New|Next|Nil|Not|Object|Optional|Or|ParamArray|Private|Property|Protected|Public|Raise|RaiseEvent|Redim|RemoveHandler|Return|Select|Self|Shared|Soft|Static|Step|Structure|Sub|Super|Then|To|Try|Until|Using|WeakAddressOf|Wend|While|Xor)\b/gi
    },
    {
        name: 'string',
        pattern: /".*"/g
    },

    // Compiler directives.
    {
        name: 'directive',
        pattern: /^#Pragma.*$/igm
    }
]); 