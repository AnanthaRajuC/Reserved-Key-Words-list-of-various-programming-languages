# Rust Reserved Words

The set of reserved words below is used to build up the basic instructions of Rust; you cannot use them as identifiers (like variable or function names).

## Strict Keywords

These keywords are **always reserved** and cannot be used as identifiers.

- A  
  - as
  - async
  - await

- B  
  - break

- C  
  - const
  - continue
  - crate

- D  
  - dyn

- E  
  - else
  - enum
  - extern

- F  
  - false
  - fn
  - for

- I  
  - if
  - impl
  - in

- L  
  - let
  - loop

- M  
  - match
  - mod
  - move
  - mut

- P  
  - pub

- R  
  - ref
  - return

- S  
  - self
  - Self
  - static
  - struct
  - super

- T  
  - trait
  - true
  - type

- U  
  - unsafe
  - use

- W  
  - where
  - while

---

## Weak Keywords

These keywords have **special meaning only in certain contexts** and can sometimes be used as identifiers elsewhere.

- A  
  - abstract  

- B  
  - become  
  - box  

- D  
  - do  

- F  
  - final  

- M  
  - macro  

- O  
  - override  

- P  
  - priv  

- T  
  - try  
  - typeof  

- U  
  - unsized  

- V  
  - virtual  

- Y  
  - yield  

---

## Notes

- **Strict keywords**: Always reserved (e.g., `fn`, `let`, `if`)
- **Weak keywords**: Only reserved in specific contexts (e.g., `try`, `macro`)
- Some weak keywords are **reserved for future use** and may become strict later.
