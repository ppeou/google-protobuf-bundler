/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.foo.bar.AddressBook', null, global);
goog.exportSymbol('proto.foo.bar.Person', null, global);
goog.exportSymbol('proto.foo.bar.Person.PhoneNumber', null, global);
goog.exportSymbol('proto.foo.bar.Person.PhoneType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.foo.bar.Person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.foo.bar.Person.repeatedFields_, null);
};
goog.inherits(proto.foo.bar.Person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.foo.bar.Person.displayName = 'proto.foo.bar.Person';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.foo.bar.Person.PhoneNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.foo.bar.Person.PhoneNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.foo.bar.Person.PhoneNumber.displayName = 'proto.foo.bar.Person.PhoneNumber';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.foo.bar.AddressBook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.foo.bar.AddressBook.repeatedFields_, null);
};
goog.inherits(proto.foo.bar.AddressBook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.foo.bar.AddressBook.displayName = 'proto.foo.bar.AddressBook';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.foo.bar.Person.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.foo.bar.Person.prototype.toObject = function(opt_includeInstance) {
  return proto.foo.bar.Person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.foo.bar.Person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.foo.bar.Person.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phonesList: jspb.Message.toObjectList(msg.getPhonesList(),
    proto.foo.bar.Person.PhoneNumber.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.foo.bar.Person}
 */
proto.foo.bar.Person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.foo.bar.Person;
  return proto.foo.bar.Person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.foo.bar.Person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.foo.bar.Person}
 */
proto.foo.bar.Person.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = new proto.foo.bar.Person.PhoneNumber;
      reader.readMessage(value,proto.foo.bar.Person.PhoneNumber.deserializeBinaryFromReader);
      msg.addPhones(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.foo.bar.Person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.foo.bar.Person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.foo.bar.Person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.foo.bar.Person.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhonesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.foo.bar.Person.PhoneNumber.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.foo.bar.Person.PhoneType = {
  MOBILE: 0,
  HOME: 1,
  WORK: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.foo.bar.Person.PhoneNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.foo.bar.Person.PhoneNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.foo.bar.Person.PhoneNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.foo.bar.Person.PhoneNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.foo.bar.Person.PhoneNumber}
 */
proto.foo.bar.Person.PhoneNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.foo.bar.Person.PhoneNumber;
  return proto.foo.bar.Person.PhoneNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.foo.bar.Person.PhoneNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.foo.bar.Person.PhoneNumber}
 */
proto.foo.bar.Person.PhoneNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {!proto.foo.bar.Person.PhoneType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.foo.bar.Person.PhoneNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.foo.bar.Person.PhoneNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.foo.bar.Person.PhoneNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.foo.bar.Person.PhoneNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string number = 1;
 * @return {string}
 */
proto.foo.bar.Person.PhoneNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.foo.bar.Person.PhoneNumber.prototype.setNumber = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PhoneType type = 2;
 * @return {!proto.foo.bar.Person.PhoneType}
 */
proto.foo.bar.Person.PhoneNumber.prototype.getType = function() {
  return /** @type {!proto.foo.bar.Person.PhoneType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.foo.bar.Person.PhoneType} value */
proto.foo.bar.Person.PhoneNumber.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.foo.bar.Person.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.foo.bar.Person.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.foo.bar.Person.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.foo.bar.Person.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.foo.bar.Person.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.foo.bar.Person.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated PhoneNumber phones = 4;
 * @return {!Array<!proto.foo.bar.Person.PhoneNumber>}
 */
proto.foo.bar.Person.prototype.getPhonesList = function() {
  return /** @type{!Array<!proto.foo.bar.Person.PhoneNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.foo.bar.Person.PhoneNumber, 4));
};


/** @param {!Array<!proto.foo.bar.Person.PhoneNumber>} value */
proto.foo.bar.Person.prototype.setPhonesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.foo.bar.Person.PhoneNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.foo.bar.Person.PhoneNumber}
 */
proto.foo.bar.Person.prototype.addPhones = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.foo.bar.Person.PhoneNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.foo.bar.Person.prototype.clearPhonesList = function() {
  this.setPhonesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.foo.bar.AddressBook.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.foo.bar.AddressBook.prototype.toObject = function(opt_includeInstance) {
  return proto.foo.bar.AddressBook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.foo.bar.AddressBook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.foo.bar.AddressBook.toObject = function(includeInstance, msg) {
  var f, obj = {
    peopleList: jspb.Message.toObjectList(msg.getPeopleList(),
    proto.foo.bar.Person.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.foo.bar.AddressBook}
 */
proto.foo.bar.AddressBook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.foo.bar.AddressBook;
  return proto.foo.bar.AddressBook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.foo.bar.AddressBook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.foo.bar.AddressBook}
 */
proto.foo.bar.AddressBook.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.foo.bar.Person;
      reader.readMessage(value,proto.foo.bar.Person.deserializeBinaryFromReader);
      msg.addPeople(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.foo.bar.AddressBook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.foo.bar.AddressBook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.foo.bar.AddressBook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.foo.bar.AddressBook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeopleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.foo.bar.Person.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Person people = 1;
 * @return {!Array<!proto.foo.bar.Person>}
 */
proto.foo.bar.AddressBook.prototype.getPeopleList = function() {
  return /** @type{!Array<!proto.foo.bar.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.foo.bar.Person, 1));
};


/** @param {!Array<!proto.foo.bar.Person>} value */
proto.foo.bar.AddressBook.prototype.setPeopleList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.foo.bar.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.foo.bar.Person}
 */
proto.foo.bar.AddressBook.prototype.addPeople = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.foo.bar.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.foo.bar.AddressBook.prototype.clearPeopleList = function() {
  this.setPeopleList([]);
};


goog.object.extend(exports, proto.foo.bar);
