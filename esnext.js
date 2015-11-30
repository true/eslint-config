'use strict';
var deepAssign = require('deep-assign');
var def = require('./');

def = deepAssign({}, def);

def.parser = 'babel-eslint';

def.rules['no-var'] = 2;
def.rules['prefer-arrow-callback'] = 0;
def.rules['prefer-const'] = 0;
def.rules['prefer-reflect'] = 0;
def.rules['prefer-template'] = 0;
def.rules['prefer-spread'] = 0;
def.rules['babel/object-shorthand'] = [2, 'always'];
def.rules['babel/generator-star-spacing'] = def.rules['generator-star-spacing'];
def.rules['babel/arrow-parens'] = def.rules['arrow-parens'];
def.rules['babel/object-curly-spacing'] = def.rules['object-curly-spacing'];
def.rules['object-shorthand'] = 0;
def.rules['generator-star-spacing'] = 0;
def.rules['arrow-parens'] = 0;
def.rules['object-curly-spacing'] = [0, 'never'];

module.exports = def;
