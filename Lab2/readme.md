#FS (file system) node JS's Module
it direct connect with client OS rather than browser
## Major task of FS Module
-writefile()
  -appendfile()
Directory mangement 
  -mkdir()
  -rmdir()
  -readdir()
-Metadata/Information 
  -start()
  -lstat()
  fstat() 
-Watching for changes
-watch()
-watchfile() 
-unwatchfile()
-Streaming Large file
  -createreadstream()
  -createWritestream()
-File Operations
  -rename()
  -truncate()
  -unlink()
  -link()
  -syslink()

   ## CURD

create/Insert,Read/REtrieve,update,Delete

## Item

id, name, price, qty

## operations
 
1. add to cart
2. show cart
3. remove item from cart
4. update quantity from cart
5. checkout

Note: all items will be stored in hdd, so after termination of program we can retrive cart details

## Required File

1. crud.js - it contains all the methods and entry point
2. product.json - it contains the product details in array from