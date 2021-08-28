import * as AutoImportsPlugin from "./AutoImportsPlugin"

// @ponicode
describe("apply", () => {
    let inst: any

    beforeEach(() => {
        inst = new AutoImportsPlugin.AutoImportsPlugin({ sources: ["LE53KBN", "AM32WSU", "LE53KBN", "HR47NOU", "UP72NWV"], startDirs: ["/PDFData/rothfuss/data/UCF101/prepared_videos"], basenameImportFiles: "/usr/sbin", importsExprGenerators: { size: 1 }, withoutExt: true })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.apply(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("saveImportFiles", () => {
    let inst: any

    beforeEach(() => {
        inst = new AutoImportsPlugin.AutoImportsPlugin({ sources: ["LE53KBN", "AM32WSU"], startDirs: ["/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos"], basenameImportFiles: "/selinux", importsExprGenerators: { size: 4 }, withoutExt: false })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.saveImportFiles({ size: 80 }, "/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.saveImportFiles({ size: 10 }, "./path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.saveImportFiles({ size: 2 }, "/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.saveImportFiles({ size: 256 }, "/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.saveImportFiles({ size: 128 }, "path/to/file.ext")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.saveImportFiles({ size: Infinity }, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("generateImportTexts", () => {
    let inst: any

    beforeEach(() => {
        inst = new AutoImportsPlugin.AutoImportsPlugin({ sources: ["UP72NWV"], startDirs: ["/PDFData/rothfuss/data/UCF101/prepared_videos"], basenameImportFiles: "/usr/share", importsExprGenerators: { size: 4 }, withoutExt: false })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.generateImportTexts({ size: 80 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.generateImportTexts({ size: 5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.generateImportTexts({ size: 2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.generateImportTexts({ size: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.generateImportTexts({ size: 16 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.generateImportTexts({ size: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fillingImportsMap", () => {
    let inst: any

    beforeEach(() => {
        inst = new AutoImportsPlugin.AutoImportsPlugin({ sources: ["LE53KBN", "HR47NOU", "AM32WSU", "AM32WSU"], startDirs: ["/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos"], basenameImportFiles: "/opt/share", importsExprGenerators: { size: 16 }, withoutExt: false })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.fillingImportsMap(["/usr/ports", "/usr/sbin"], { size: 80 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.fillingImportsMap(["/selinux", "/usr/ports", "/opt/share", "/opt/share"], { size: 32 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.fillingImportsMap(["/opt/share"], { size: 80 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.fillingImportsMap(["/usr/sbin", "/selinux"], { size: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.fillingImportsMap(["/usr/ports", "/usr/sbin", "/opt/share", "/usr/ports", "/usr/sbin"], { size: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.fillingImportsMap([], { size: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getFlatImportNamesCollection", () => {
    let inst: any

    beforeEach(() => {
        inst = new AutoImportsPlugin.AutoImportsPlugin({ sources: ["HR47NOU", "LE53KBN"], startDirs: ["/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos"], basenameImportFiles: "/usr/share", importsExprGenerators: { size: 16 }, withoutExt: false })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getFlatImportNamesCollection({ size: 32 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.getFlatImportNamesCollection({ size: 128 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.getFlatImportNamesCollection({ size: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.getFlatImportNamesCollection({ size: 256 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.getFlatImportNamesCollection({ size: 5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.getFlatImportNamesCollection({ size: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getPromisePartitionedImports", () => {
    let inst: any

    beforeEach(() => {
        inst = new AutoImportsPlugin.AutoImportsPlugin({ sources: ["LE53KBN", "HR47NOU", "UP72NWV"], startDirs: ["/PDFData/rothfuss/data/UCF101/prepared_videos"], basenameImportFiles: "/selinux", importsExprGenerators: { size: 2 }, withoutExt: true })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getPromisePartitionedImports("/synergys")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.getPromisePartitionedImports("../packet_data/bgp4/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.getPromisePartitionedImports("/Synergy.app/Contents/MacOS/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.getPromisePartitionedImports("/synergyc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.getPromisePartitionedImports("/lustre/storeB/immutable/archive/projects/MIST2/AM2p5_MIST2/archive/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.getPromisePartitionedImports("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("readdir", () => {
    let inst: any

    beforeEach(() => {
        inst = new AutoImportsPlugin.AutoImportsPlugin({ sources: ["LE53KBN", "AM32WSU"], startDirs: ["/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos", "/PDFData/rothfuss/data/UCF101/prepared_videos"], basenameImportFiles: "/opt/share", importsExprGenerators: { size: 16 }, withoutExt: false })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.readdir("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.readdir("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
