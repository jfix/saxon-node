[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-ci-build-image]][travis-ci-build-url]

# saxon-node

An exploration of binding Saxon/C <a href="http://www.saxonica.com/saxon-c/index.xml">http://www.saxonica.com/html/saxon-c/index.html</a> (XSLT 2.0/3.0, XQuery 1.0/3.0, Schema Validation 1.0/1.1 and XPath 2.0/3.0).
Professional and enterprise features can be accessed with your license from Saxonica.

Note: release v0.2.2 Upgraded to 1.1.0 API. The method names mirror http://www.saxonica.com/saxon-c/doc/html/index.html. There is now a
command line switch for setting the Saxon/C home: --saxonc_home=<YOUR_SAXONC_HOME> for building

```
npm install --build-from-source --saxonc_home=<YOUR_SAXONC_HOME>
```

Note: release v0.2.2 is for Saxon/C 1.1.0.  For mac two native files need replaced.  Where you have Saxon-HEC1.1.0 installed:

```
      rm `pwd`/../Saxonica/Saxon-HEC1.1.0/Saxon.C.API/SaxonCGlue.h;
      wget --directory-prefix=`pwd`/../Saxonica/Saxon-HEC1.1.0/Saxon.C.API https://dev.saxonica.com/repos/archive/opensource/latest9.8/hec/Saxon.C.API/HEC/SaxonCGlue.h;
      rm `pwd`/../Saxonica/Saxon-HEC1.1.0/Saxon.C.API/SaxonCProcessor.c;
      wget --directory-prefix=`pwd`/../Saxonica/Saxon-HEC1.1.0/Saxon.C.API https://dev.saxonica.com/repos/archive/opensource/latest9.8/hec/Saxon.C.API/SaxonCProcessor.c;
```

Note: release v0.2.1 is linux and mac and pending windows version of Saxon/C 1.0.2

Note: release v0.2.0 is linux only pending the release of mac and windows versions of Saxon/C 1.0.1

Note: release v0.1.1 is built with nodejs v4.2.x [v4.2.x has Buffer acting like Uint8Array and currently is indistinguishable on the native side yet seems to work for this project]. If you want v0.12.x compatibility stay with v0.0.5. npm will continue with
nodejs v4.2.x line and any fixes or features needed by prior versions will be from github branches.

To tell it where the Saxon/C is set the environment variable SAXONC_HOME to path:

```bash
export SAXONC_HOME=/home/user/Software/Saxonica/Saxon-HEC1.0.2
```

#### Prebuilts

linux-x64, linux-ia32, darwin-x64 and win32-ia32 (no saxon-c 1.0.2 yet).

```bash
npm install --fallback-to-build
```

will first try to find a compatible native prebuilt.  If it works you won't need development tools and compilers.

#### Building (only if needed; contact me if there is a particular prebuild you would use)

If a compatible prebuilt is not found, a number of environment variables are needed.
For the build phase, as with integrating Saxon/C interface code in c/c++ applications the jni.h is needed.  Set JAVA_HOME and the binding.gyp locates the jni.h from there. Only the headers are used; libsaxon.so that comes wth Saxon/C is loaded from it's home folder.
The libsaxon.so depends on $SAXONC_HOME/rt during runtime and it needs library paths $SAXONC_HOME:$SAXONC_HOME/rt/lib/amd64/jetvm:$SAXONC_HOME/rt/lib/amd64.  rt is the runtime <a href="http://www.excelsiorjet.com/">http://www.excelsiorjet.com/</a> that Saxon/C provides.

To run it needs the harmony switch and at least nodejs v4.2.x. Make sure there isn't a java path to jvm in front of the Excelsior JET tool in rt folder:

```bash
export LD_LIBRARY_PATH=$SAXONC_HOME:$SAXONC_HOME/rt/lib/amd64/jetvm:$SAXONC_HOME/rt/lib/amd64:$LD_LIBRARY_PATH
node --harmony saxon-node.js /home/user/testing-grounds/BCL/analyze.xml /home/user/NetBeansProjects/OOBackbone/stylesheets/divconIsSpecies.xsl
```
Yet this isn't the purpose to run xslt as this small app.  The intention is the calling of the API from your applications.

#### To test

```bash
export LD_LIBRARY_PATH=$SAXONC_HOME:$SAXONC_HOME/rt/lib/amd64/jetvm:$SAXONC_HOME/rt/lib/amd64:$LD_LIBRARY_PATH
mocha --harmony --require should
```

Documentation: <a href="http://rimmartin.github.io/saxon-node/">Saxon Node API</a>

[npm-image]: https://badge.fury.io/js/saxon-node.svg
[npm-url]: https://www.npmjs.com/package/saxon-node
[downloads-image]: https://img.shields.io/npm/dm/saxon-node.svg
[node-version-image]: https://img.shields.io/node/v/saxon-node.svg
[node-version-url]: https://nodejs.org/en/download/
[travis-ci-build-image]: https://travis-ci.org/rimmartin/saxon-node.svg?branch=master
[travis-ci-build-url]: https://travis-ci.org/rimmartin/saxon-node
