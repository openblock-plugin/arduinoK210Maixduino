const {formatMessage, ArgumentType, BlockType, ProgramModeType, CommonPeripheral} = window.Scratch;

const PNPID_LIST = [
    // FTDI
    'USB\\VID_0403&PID_6010'
];

const SERIAL_CONFIG = {
    baudRate: 115200,
    dataBits: 8,
    stopBits: 1
};

const DIVECE_OPT = {
    type: 'arduino',
    fqbn: 'Maixduino:k210:mduino:toolsloc=default,clksrc=400,burn_baudrate=1500000,burn_tool_firmware=mduino'
};

const Pins = {
    D0: '0',
    D1: '1',
    D2: '2',
    D3: '3',
    D4: '4',
    D5: '5',
    D6: '6',
    D7: '7',
    D8: '8',
    D9: '9',
    D10: '10',
    D11: '11',
    D12: '12',
    D13: '13',
    SDA: '14',
    SCL: '15',
    BOOT: '16'
};

const Level = {
    High: 'HIGH',
    Low: 'LOW'
};

const SerialNo = {
    Serial0: '0',
    Serial1: '1',
    Serial2: '2',
    Serial3: '3'
};

const Buadrate = {
    B4800: '4800',
    B9600: '9600',
    B19200: '19200',
    B38400: '38400',
    B57600: '57600',
    B76800: '76800',
    B115200: '115200'
};

const Eol = {
    Warp: 'warp',
    NoWarp: 'noWarp'
};

const Mode = {
    Input: 'INPUT',
    Output: 'OUTPUT',
    InputPullup: 'INPUT_PULLUP',
    InputPulldown: 'INPUT_PULLDOWN'
};

const InterrupMode = {
    Rising: 'RISING',
    Falling: 'FALLING',
    Change: 'CHANGE',
    LowLevel: 'LOW',
    HighLevel: 'HIGH'
};

const DataType = {
    Integer: 'INTEGER',
    Decimal: 'DECIMAL',
    String: 'STRING'
};

class ArduinoK210Maixduino extends CommonPeripheral {
    constructor (runtime, deviceId) {
        super(runtime, deviceId, PNPID_LIST, SERIAL_CONFIG, DIVECE_OPT);
    }
}

class OpenBlockArduinoK210MaixduinoDevice {
    get DEVICE_ID () {
        return 'arduinoK210Maixduino';
    }

    get PINS_MENU () {
        return [
            {text: '0', value: Pins.D0},
            {text: '1', value: Pins.D1},
            {text: '2', value: Pins.D2},
            {text: '3', value: Pins.D3},
            {text: '4', value: Pins.D4},
            {text: '5', value: Pins.D5},
            {text: '6', value: Pins.D6},
            {text: '7', value: Pins.D7},
            {text: '8', value: Pins.D8},
            {text: '9', value: Pins.D9},
            {text: '10', value: Pins.D10},
            {text: '11', value: Pins.D11},
            {text: '12', value: Pins.D12},
            {text: '13', value: Pins.D13},
            {text: 'SDA', value: Pins.SDA},
            {text: 'SCL', value: Pins.SCL},
            {text: 'BOOT', value: Pins.BOOT}
        ];
    }

    get DEFAULT_PIN () {
        return Pins.D0;
    }

    get MODE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.modeMenu.input',
                    default: 'input',
                    description: 'label for input pin mode'
                }),
                value: Mode.Input
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.modeMenu.output',
                    default: 'output',
                    description: 'label for output pin mode'
                }),
                value: Mode.Output
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.modeMenu.inputPullup',
                    default: 'input-pullup',
                    description: 'label for input-pullup pin mode'
                }),
                value: Mode.InputPullup
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.modeMenu.inputPulldown',
                    default: 'input-pulldown',
                    description: 'label for input-pulldown pin mode'
                }),
                value: Mode.InputPulldown
            }
        ];
    }

    get LEVEL_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.levelMenu.high',
                    default: 'high',
                    description: 'label for high level'
                }),
                value: Level.High
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.levelMenu.low',
                    default: 'low',
                    description: 'label for low level'
                }),
                value: Level.Low
            }
        ];
    }

    get INTERRUP_MODE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.InterrupModeMenu.risingEdge',
                    default: 'rising edge',
                    description: 'label for rising edge interrupt mode'
                }),
                value: InterrupMode.Rising
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.InterrupModeMenu.fallingEdge',
                    default: 'falling edge',
                    description: 'label for falling edge interrupt mode'
                }),
                value: InterrupMode.Falling
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.InterrupModeMenu.changeEdge',
                    default: 'change edge',
                    description: 'label for change edge interrupt mode'
                }),
                value: InterrupMode.Change
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.InterrupModeMenu.low',
                    default: 'low level',
                    description: 'label for low level interrupt mode'
                }),
                value: InterrupMode.LowLevel
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.InterrupModeMenu.high',
                    default: 'high level',
                    description: 'label for high level interrupt mode'
                }),
                value: InterrupMode.HighLevel
            }
        ];
    }

    get SERIAL_NO_MENU () {
        return [
            {text: '0', value: SerialNo.Serial0},
            {text: '1', value: SerialNo.Serial1},
            {text: '2', value: SerialNo.Serial2},
            {text: '3', value: SerialNo.Serial3}
        ];
    }

    get DEFAULT_SERIAL_RX_PIN () {
        return Pins.D0;
    }

    get DEFAULT_SERIAL_TX_PIN () {
        return Pins.D1;
    }

    get BAUDTATE_MENU () {
        return [
            {text: '4800', value: Buadrate.B4800},
            {text: '9600', value: Buadrate.B9600},
            {text: '19200', value: Buadrate.B19200},
            {text: '38400', value: Buadrate.B38400},
            {text: '57600', value: Buadrate.B57600},
            {text: '76800', value: Buadrate.B76800},
            {text: '115200', value: Buadrate.B115200}
        ];
    }

    get EOL_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.eolMenu.warp',
                    default: 'warp',
                    description: 'label for warp print line'
                }),
                value: Eol.Warp
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.eolMenu.noWarp',
                    default: 'no-warp',
                    description: 'label for no warp print line'
                }),
                value: Eol.NoWarp
            }
        ];
    }

    get DATA_TYPE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.dataTypeMenu.integer',
                    default: 'integer',
                    description: 'label for integer type data'
                }),
                value: DataType.Integer
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.dataTypeMenu.decimal',
                    default: 'decimal',
                    description: 'label for decimal type data'
                }),
                value: DataType.Decimal
            },
            {
                text: formatMessage({
                    id: 'arduinoK210Maixduino.dataTypeMenu.string',
                    default: 'string',
                    description: 'label for string type data'
                }),
                value: DataType.String
            }
        ];
    }

    constructor (runtime) {
        this.runtime = runtime;
        this._peripheral = new ArduinoK210Maixduino(this.runtime, this.DEVICE_ID);
    }

    getInfo () {
        return [
            {
                id: 'pin',
                name: formatMessage({
                    id: 'arduinoK210Maixduino.category.pins',
                    default: 'Pins',
                    description: 'The name of the arduino K210 Maixduino device pin category'
                }),
                color1: '#4C97FF',
                color2: '#3373CC',
                color3: '#3373CC',
                blocks: [
                    {
                        opcode: 'setPinMode',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.pins.setPinMode',
                            default: 'set pin [PIN] mode [MODE]',
                            description: 'arduinoK210Maixduino set pin mode'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_PIN
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'mode',
                                defaultValue: Mode.Input
                            }
                        }
                    },
                    {
                        opcode: 'setDigitalOutput',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.pins.setDigitalOutput',
                            default: 'set digital pin [PIN] out [LEVEL]',
                            description: 'arduinoK210Maixduino set digital pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_PIN
                            },
                            LEVEL: {
                                type: ArgumentType.STRING,
                                menu: 'level',
                                defaultValue: Level.High
                            }
                        }
                    },
                    {
                        opcode: 'setPwmOutput',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.pins.setPwmOutput',
                            default: 'set pwm pin [PIN] out [OUT]',
                            description: 'arduinoK210Maixduino set pwm pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_PIN
                            },
                            OUT: {
                                type: ArgumentType.UINT8_NUMBER,
                                defaultValue: '255'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'readDigitalPin',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.pins.readDigitalPin',
                            default: 'read digital pin [PIN]',
                            description: 'arduinoK210Maixduino read digital pin'
                        }),
                        blockType: BlockType.BOOLEAN,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_PIN
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'setServoOutput',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.pins.setServoOutput',
                            default: 'set servo pin [PIN] out [OUT]',
                            description: 'arduinoK210Maixduino set servo pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_PIN
                            },
                            OUT: {
                                type: ArgumentType.HALF_ANGLE,
                                defaultValue: '90'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'attachInterrupt',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.pins.attachInterrupt',
                            default: 'attach interrupt pin [PIN] mode [MODE] executes',
                            description: 'arduinoK210Maixduino attach interrupt'
                        }),
                        blockType: BlockType.CONDITIONAL,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_PIN
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'interruptMode',
                                defaultValue: InterrupMode.Rising
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'detachInterrupt',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.pins.detachInterrupt',
                            default: 'detach interrupt pin [PIN]',
                            description: 'arduinoK210Maixduino detach interrupt'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_PIN
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    // Legacy aliases, kept for backward compatibility.
                    {
                        opcode: 'k210SetPwmOutput',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.pins.setPwmOutput',
                            default: 'set pwm pin [PIN] out [OUT]',
                            description: 'arduinoK210Maixduino set pwm pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_PIN
                            },
                            OUT: {
                                type: ArgumentType.UINT8_NUMBER,
                                defaultValue: '255'
                            }
                        },
                        hideFromPalette: true,
                        func: 'setPwmOutput'
                    }
                ],
                menus: {
                    pins: {items: this.PINS_MENU},
                    mode: {items: this.MODE_MENU},
                    level: {acceptReporters: true, items: this.LEVEL_MENU},
                    interruptMode: {items: this.INTERRUP_MODE_MENU}
                }
            },
            {
                id: 'serial',
                name: formatMessage({
                    id: 'arduinoK210Maixduino.category.serial',
                    default: 'Serial',
                    description: 'The name of the arduino K210 Maixduino device serial category'
                }),
                color1: '#9966FF',
                color2: '#774DCB',
                color3: '#774DCB',
                blocks: [
                    {
                        opcode: 'multiSerialBegin',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.serial.multiSerialBegin',
                            default: 'serial [NO] begin baudrate [BAUD] pin RX [RX_PIN] TX [TX_PIN]',
                            description: 'arduinoK210Maixduino multi serial begin'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            NO: {
                                type: ArgumentType.NUMBER,
                                menu: 'serialNo',
                                defaultValue: SerialNo.Serial0
                            },
                            BAUD: {
                                type: ArgumentType.STRING,
                                menu: 'baudrate',
                                defaultValue: Buadrate.B115200
                            },
                            RX_PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_SERIAL_RX_PIN
                            },
                            TX_PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_SERIAL_TX_PIN
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'multiSerialPrint',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.serial.multiSerialPrint',
                            default: 'serial [NO] print [VALUE] [EOL]',
                            description: 'arduinoK210Maixduino multi serial print'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            NO: {
                                type: ArgumentType.NUMBER,
                                menu: 'serialNo',
                                defaultValue: SerialNo.Serial0
                            },
                            VALUE: {
                                type: ArgumentType.STRING,
                                defaultValue: 'Hello OpenBlock'
                            },
                            EOL: {
                                type: ArgumentType.STRING,
                                menu: 'eol',
                                defaultValue: Eol.Warp
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'multiSerialAvailable',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.serial.multiSerialAvailable',
                            default: 'serial [NO] available data length',
                            description: 'arduinoK210Maixduino multi serial available data length'
                        }),
                        arguments: {
                            NO: {
                                type: ArgumentType.NUMBER,
                                menu: 'serialNo',
                                defaultValue: SerialNo.Serial0
                            }
                        },
                        blockType: BlockType.REPORTER,
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'multiSerialReadAByte',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.serial.multiSerialReadAByte',
                            default: 'serial [NO] read a byte',
                            description: 'arduinoK210Maixduino multi serial read a byte'
                        }),
                        arguments: {
                            NO: {
                                type: ArgumentType.NUMBER,
                                menu: 'serialNo',
                                defaultValue: SerialNo.Serial0
                            }
                        },
                        blockType: BlockType.REPORTER,
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    // Legacy aliases, kept for backward compatibility.
                    {
                        opcode: 'k210MultiSerialBegin',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.serial.multiSerialBegin',
                            default: 'serial [NO] begin baudrate [BAUD] pin RX [RX_PIN] TX [TX_PIN]',
                            description: 'arduinoK210Maixduino multi serial begin'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            NO: {
                                type: ArgumentType.NUMBER,
                                menu: 'serialNo',
                                defaultValue: SerialNo.Serial0
                            },
                            BAUD: {
                                type: ArgumentType.STRING,
                                menu: 'baudrate',
                                defaultValue: Buadrate.B115200
                            },
                            RX_PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_SERIAL_RX_PIN
                            },
                            TX_PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: this.DEFAULT_SERIAL_TX_PIN
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD],
                        hideFromPalette: true,
                        func: 'multiSerialBegin'
                    }
                ],
                menus: {
                    baudrate: {items: this.BAUDTATE_MENU},
                    serialNo: {items: this.SERIAL_NO_MENU},
                    pins: {items: this.PINS_MENU},
                    eol: {items: this.EOL_MENU}
                }
            },
            {
                id: 'data',
                name: formatMessage({
                    id: 'arduinoK210Maixduino.category.data',
                    default: 'Data',
                    description: 'The name of the arduino K210 Maixduino device data category'
                }),
                color1: '#CF63CF',
                color2: '#C94FC9',
                color3: '#BD42BD',
                blocks: [
                    {
                        opcode: 'dataMap',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.data.dataMap',
                            default: 'map [DATA] from ([ARG0], [ARG1]) to ([ARG2], [ARG3])',
                            description: 'arduinoK210Maixduino data map'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '50'
                            },
                            ARG0: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                            ARG1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '100'
                            },
                            ARG2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                            ARG3: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1000'
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'dataConstrain',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.data.dataConstrain',
                            default: 'constrain [DATA] between ([ARG0], [ARG1])',
                            description: 'arduinoK210Maixduino data constrain'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '50'
                            },
                            ARG0: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                            ARG1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '100'
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    '---',
                    {
                        opcode: 'dataConvert',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.data.dataConvert',
                            default: 'convert [DATA] to [TYPE]',
                            description: 'arduinoK210Maixduino data convert'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: {
                                type: ArgumentType.STRING,
                                defaultValue: '123'
                            },
                            TYPE: {
                                type: ArgumentType.STRING,
                                menu: 'dataType',
                                defaultValue: DataType.Integer
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'dataConvertASCIICharacter',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.data.dataConvertASCIICharacter',
                            default: 'convert [DATA] to ASCII character',
                            description: 'arduinoK210Maixduino data convert ASCII character'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '97'
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'dataConvertASCIINumber',
                        text: formatMessage({
                            id: 'arduinoK210Maixduino.data.dataConvertASCIINumber',
                            default: 'convert [DATA] to ASCII nubmer',
                            description: 'arduinoK210Maixduino data convert ASCII number'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: {
                                type: ArgumentType.STRING,
                                defaultValue: 'a'
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    dataType: {items: this.DATA_TYPE_MENU}
                }
            }
        ];
    }

    setPinMode (args) {
        this._peripheral.setPinMode(args.PIN, args.MODE);
        return Promise.resolve();
    }

    setDigitalOutput (args) {
        this._peripheral.setDigitalOutput(args.PIN, args.LEVEL);
        return Promise.resolve();
    }

    setPwmOutput (args) {
        this._peripheral.setPwmOutput(args.PIN, args.OUT);
        return Promise.resolve();
    }

    readDigitalPin (args) {
        return this._peripheral.readDigitalPin(args.PIN);
    }

    setServoOutput (args) {
        this._peripheral.setServoOutput(args.PIN, args.OUT);
        return Promise.resolve();
    }
}

export default OpenBlockArduinoK210MaixduinoDevice;
