# Kotlin Reserved Words

The set of reserved words below is used to build up the basic instructions of Kotlin; you cannot use them as identifiers (like variable or function names), unless escaped with backticks in some cases.

## Hard Keywords

These keywords are **always reserved** and cannot be used as identifiers.

- A  
  - as

- B  

- C  
  - class
  - continue

- D  
  - do

- E  
  - else

- F  
  - false
  - for
  - fun

- I  
  - if
  - in
  - interface
  - is

- N  
  - null

- O  
  - object

- P  
  - package

- R  
  - return

- S  
  - super

- T  
  - this
  - throw
  - true
  - try
  - typealias

- V  
  - val
  - var

- W  
  - when
  - while

---

## Soft Keywords

These keywords have **special meaning only in certain contexts** and may be used as identifiers elsewhere.

- B  
  - by  

- C  
  - catch
  - constructor  

- D  
  - delegate
  - dynamic  

- F  
  - field
  - file
  - finally  

- G  
  - get  

- I  
  - import
  - init  

- P  
  - param
  - property  

- R  
  - receiver  

- S  
  - set
  - setparam  

- W  
  - where  

---

## Modifier Keywords

These keywords are used as modifiers and are only reserved in modifier positions.

- A  
  - abstract
  - actual
  - annotation  

- C  
  - companion
  - const
  - crossinline  

- D  
  - data  

- E  
  - enum
  - expect
  - external  

- F  
  - final  

- I  
  - infix
  - inline
  - inner
  - internal  

- L  
  - lateinit  

- N  
  - noinline  

- O  
  - open
  - operator
  - out  

- P  
  - private
  - protected
  - public  

- R  
  - reified  

- S  
  - sealed
  - suspend  

- T  
  - tailrec  

- V  
  - vararg  

---

## Notes

- **Hard keywords**: Always reserved (e.g., `fun`, `val`, `if`)
- **Soft keywords**: Context-dependent (e.g., `by`, `get`, `import`)
- **Modifier keywords**: Used only in declarations (e.g., `private`, `data`, `inline`)
- Kotlin allows escaping identifiers using backticks: `` `class` ``
