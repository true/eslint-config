'use strict';
var deepAssign = require('deep-assign');
var def = require('./');

def = deepAssign({}, def);

def.plugins.push('react');

def.rules['react/display-name'] = 0;
def.rules['react/jsx-boolean-value'] = 2;
def.rules['react/jsx-closing-bracket-location'] = [2, {nonEmpty: 'after-props', selfClosing: 'after-props'}];
def.rules['react/jsx-curly-spacing'] = 2;
def.rules['react/jsx-indent-props'] = 0;
def.rules['react/jsx-max-props-per-line'] = 2;
def.rules['react/jsx-no-duplicate-props'] = 2;
def.rules['react/jsx-no-undef'] = 2;
def.rules['react/jsx-sort-prop-types'] = 2;
def.rules['react/jsx-sort-props'] = 2;
def.rules['react/jsx-uses-react'] = 2;
def.rules['react/jsx-uses-vars'] = 2;
def.rules['react/no-danger'] = 2;
def.rules['react/no-did-mount-set-state'] = 2;
def.rules['react/no-did-update-set-state'] = 2;
def.rules['react/no-multi-comp'] = 0;
def.rules['react/no-set-state'] = 2;
def.rules['react/no-unknown-property'] = 2;
def.rules['react/prop-types'] = 2;
def.rules['react/react-in-jsx-scope'] = 2;
def.rules['react/require-extension'] = 2;
def.rules['react/self-closing-comp'] = 2;
def.rules['react/sort-comp'] = 2;
def.rules['react/wrap-multilines'] = 2;

module.exports = def;
