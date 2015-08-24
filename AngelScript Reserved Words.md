# AngelScript Reserved Words

These are the keywords that are reserved by the language, i.e. they can't be used by any script defined identifiers. Remember that the host application may reserve additional keywords that
are specific to that application.



- A
  - and
  - abstract*
  - auto
- B
  - bool
  - break
- C
  - case
  - cast
  - class
  - const
  - continue
- D
  - default
  - do
  - double
- E
  - else
  - enum
- F
  - false
  - final*
  - float
  - for
  - from*
  - funcdef
- G
  - get*
- I
  - if
  - import
  - in
  - inout
  - int
  - interface
  - int8
  - int16
  - int32
  - int64
  - is
- M
  - mixin
  - namespace
- N 
  - not
  - null
- O
  - or
  - out
  - override*
- P
  - private
  - protected
  - return
- S
  - set*
  - shared*
  - super*
  - switch
- T
  - this*
  - true
  - typedef
- U
  - uint
  - uint8
  - uint16
  - uint32
  - uint64
- V
  - void
- W
  - while
- X
  - xor

\* Not really a reserved keyword, but is recognized by the compiler as a built-in keyword.

These are the non-alphabetical tokens that are also used in the language syntax.

  - *
  - **
  - /
  - %
  - +
  - -
  - <=
  - <
  - >=
  - >
  - (
  - )
  - ==
  - !=
  - ?
  - :
  - =
  - +=
  - -=
  - *=
  - /=
  - %=
  - **=
  - ++
  - --
  - &
  - ,
  - {
  - }
  - ;
  - |
  - ^
  - ~
  - <<
  - >>
  - >>>
  - &=
  - |=
  - ^=
  - <<=
  - >>=
  - >>>=
  - .
  - &&
  - ||
  - !
  - [
  - ]
  - ^^
  - @ 
  - !is
  - :: 

Other than the above tokens there are also numerical, string, identifier, and comment tokens.

- 123456789
- 123.123e123
- 123.123e123f
- 0x1234FEDC
- 0d123987
- 0o1276
- 0b1010
- 'abc'
- "abc"
- """heredoc"""
- _Abc123
- //
- /*
- */ 

The characters space (32), tab (9), carriage return (13), line feed (10), and the UTF8 byte-order-mark (U+FEFF) are all recognized as whitespace.

---
