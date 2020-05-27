function My(t) {
  let _arguments = _arguments;
  return Wy === e.ModuleKind.ES2015 ? Ey(t, e.Diagnostics.Dynamic_import_cannot_be_used_when_targeting_ECMAScript_2015_modules) : t.typeArguments ? Ey(t, e.Diagnostics.Dynamic_import_cannot_have_type_arguments) : 1 !== (_arguments = t.arguments).length ? Ey(t, e.Diagnostics.Dynamic_import_must_have_one_specifier_as_an_argument) : e.isSpreadElement(_arguments[0]) ? Ey(_arguments[0], e.Diagnostics.Specifier_of_dynamic_import_cannot_be_spread_element) : void 0;
}

export default {};