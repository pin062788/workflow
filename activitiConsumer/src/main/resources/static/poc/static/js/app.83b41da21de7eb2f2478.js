webpackJsonp([1], {
    0: function (t, e) {
    }, M93x: function (t, e, a) {
        "use strict";

        function o(t) {
            a("Ypwj")
        }

        var r = a("xJD8"), i = a("d3i5"), l = a("VU/8"), n = o, s = l(r.a, i.a, n, null, null);
        e.a = s.exports
    }, NHnr: function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var o = a("7+uW"), r = a("M93x"), i = a("ORbq"), l = a("YaEn");
        o.default.use(i.a), o.default.config.productionTip = !1, new o.default({
            el: "#app",
            router: l.a,
            template: "<App/>",
            components: {App: r.a}
        })
    }, Vkxs: function (t, e, a) {
        "use strict";
        e.a = {url: "http://localhost:", portC: "9907/", portP: "9904/"}
    }, YaEn: function (t, e, a) {
        "use strict";
        var o = a("7+uW"), r = a("/ocq"), i = a("fY2s"), l = a("zL8q"), n = a.n(l), s = a("q8zI");
        a.n(s);
        o.default.use(r.a), o.default.use(n.a), e.a = new r.a({routes: [{path: "/", name: "Apply", component: i.a}]})
    }, Ypwj: function (t, e) {
    }, d3i5: function (t, e, a) {
        "use strict";
        var o = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {attrs: {id: "app"}}, [a("router-view")], 1)
        }, r = [], i = {render: o, staticRenderFns: r};
        e.a = i
    }, fY2s: function (t, e, a) {
        "use strict";

        function o(t) {
            a("i8uF")
        }

        var r = a("qayR"), i = a("pDV3"), l = a("VU/8"), n = o, s = l(r.a, i.a, n, null, null);
        e.a = s.exports
    }, i8uF: function (t, e) {
    }, pDV3: function (t, e, a) {
        "use strict";
        var o = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("el-tabs", {attrs: {type: "border-card"}}, [a("el-tab-pane", {attrs: {label: "基本信息"}}, [a("el-form", {
                ref: "basicForm",
                staticClass: "demo-form-inline log-input",
                attrs: {inline: !0, model: t.basicForm, rules: t.rules}
            }, [a("el-form-item", {
                attrs: {
                    label: "费用主题",
                    prop: "theme",
                    "label-width": t.labelWidth
                }
            }, [a("el-input", {
                attrs: {placeholder: "请填写费用主题"}, model: {
                    value: t.basicForm.theme, callback: function (e) {
                        t.basicForm.theme = e
                    }, expression: "basicForm.theme"
                }
            })], 1), t._v(" "), a("el-form-item", {
                attrs: {
                    label: "费用编号",
                    prop: "number",
                    "label-width": t.labelWidth
                }
            }, [a("el-input", {
                attrs: {placeholder: "请填写费用编号"}, model: {
                    value: t.basicForm.number, callback: function (e) {
                        t.basicForm.number = e
                    }, expression: "basicForm.number"
                }
            })], 1), t._v(" "), a("el-form-item", {
                attrs: {
                    label: "归属部门",
                    prop: "dep",
                    "label-width": t.labelWidth
                }
            }, [a("el-input", {
                attrs: {placeholder: "请填写归属部门"}, model: {
                    value: t.basicForm.dep, callback: function (e) {
                        t.basicForm.dep = e
                    }, expression: "basicForm.dep"
                }
            })], 1)], 1)], 1), t._v(" "), a("el-row", {staticClass: "little-nav"}, [a("el-col", {attrs: {span: 18}}, [t._v("报销详情")]), t._v(" "), a("el-col", {
                staticClass: "text-right",
                attrs: {span: 6}
            }, [a("el-button", {
                attrs: {type: "primary", icon: "plus"},
                on: {click: t.add}
            }, [t._v(" 新 增 ")])], 1)], 1), t._v(" "), a("div", {staticClass: "text-center"}, [a("el-table", {
                staticStyle: {width: "100%"},
                attrs: {data: t.tableData, border: ""}
            }, [a("el-table-column", {
                attrs: {
                    type: "index",
                    label: "序号",
                    width: "90"
                }
            }), t._v(" "), a("el-table-column", {
                attrs: {
                    prop: "subject",
                    label: "费用科目",
                    width: "360"
                }
            }), t._v(" "), a("el-table-column", {
                attrs: {
                    prop: "money",
                    label: "金额(元)",
                    width: "240"
                }
            }), t._v(" "), a("el-table-column", {
                attrs: {
                    prop: "date",
                    label: "发生时间",
                    width: "300"
                }
            }), t._v(" "), a("el-table-column", {
                attrs: {
                    prop: "remark",
                    label: "备注"
                }
            }), t._v(" "), a("el-table-column", {
                attrs: {label: "操作", width: "200"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [a("el-button", {
                            attrs: {type: "info", size: "small", icon: "edit"}, on: {
                                click: function (a) {
                                    t.edit(e.row, e.$index)
                                }
                            }
                        }, [t._v("编辑")]), t._v(" "), a("el-button", {
                            attrs: {type: "danger", size: "small", icon: "delete"},
                            on: {
                                click: function (a) {
                                    t.deleteDta(e.row, e.$index)
                                }
                            }
                        }, [t._v("删除")])]
                    }
                }])
            })], 1), t._v(" "), a("el-row", {staticClass: "total-money"}, [a("el-col", {attrs: {span: 6}}, [t._v("\n            总金额：\n          ")]), t._v(" "), a("el-col", {
                staticStyle: {"text-align": "left"},
                attrs: {span: 18}
            }, [t._v("\n            " + t._s(t.total) + "\n          ")])], 1)], 1), t._v(" "), a("div", {staticClass: "btn-box text-center"}, [a("el-button", {
                attrs: {
                    type: "primary",
                    size: "large"
                }, on: {
                    click: function (e) {
                        t.submit("basicForm")
                    }
                }
            }, [t._v("提 交")]), t._v(" "), a("el-button", {
                attrs: {type: "primary", size: "large"},
                on: {
                    click: function (e) {
                        t.pass()
                    }
                }
            }, [t._v("通过")]), t._v(" "), a("el-button", {
                attrs: {type: "primary", size: "large"}, on: {
                    click: function (e) {
                        t.nopass()
                    }
                }
            }, [t._v("不通过")])], 1)], 1), t._v(" "), a("el-dialog", {
                attrs: {title: "新增", visible: t.addFormVisible},
                on: {
                    "update:visible": function (e) {
                        t.addFormVisible = e
                    }
                }
            }, [a("el-form", {
                ref: "addForm",
                staticClass: "demo-form-inline line-form",
                attrs: {model: t.addForm, rules: t.rules, inline: !0}
            }, [a("el-form-item", {
                attrs: {
                    label: "费用科目",
                    "label-width": t.formLabe2Width,
                    prop: "subject"
                }
            }, [a("el-input", {
                attrs: {"auto-complete": "off"}, model: {
                    value: t.addForm.subject, callback: function (e) {
                        t.addForm.subject = e
                    }, expression: "addForm.subject"
                }
            })], 1), t._v(" "), a("el-form-item", {
                attrs: {
                    label: "金额",
                    "label-width": t.formLabe2Width,
                    prop: "money"
                }
            }, [a("el-input", {
                attrs: {"auto-complete": "off"}, model: {
                    value: t.addForm.money, callback: function (e) {
                        t.addForm.money = e
                    }, expression: "addForm.money"
                }
            })], 1), t._v(" "), a("el-form-item", {
                attrs: {
                    label: "发生时间",
                    "label-width": t.formLabe2Width,
                    prop: "date"
                }
            }, [a("el-date-picker", {
                staticStyle: {width: "100%"},
                attrs: {type: "date", placeholder: "选择日期"},
                on: {change: t.dateChangeAdd},
                model: {
                    value: t.addForm.date, callback: function (e) {
                        t.addForm.date = e
                    }, expression: "addForm.date"
                }
            })], 1), t._v(" "), a("el-form-item", {
                attrs: {
                    label: "备注",
                    "label-width": t.formLabe2Width
                }
            }, [a("el-input", {
                attrs: {"auto-complete": "off"}, model: {
                    value: t.addForm.remark, callback: function (e) {
                        t.addForm.remark = e
                    }, expression: "addForm.remark"
                }
            })], 1)], 1), t._v(" "), a("div", {
                staticClass: "dialog-footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [a("el-button", {
                on: {
                    click: function (e) {
                        t.addFormVisible = !1
                    }
                }
            }, [t._v("取 消")]), t._v(" "), a("el-button", {
                attrs: {type: "primary"}, on: {
                    click: function (e) {
                        t.submitAddForm("addForm")
                    }
                }
            }, [t._v("确 定")])], 1)], 1), t._v(" "), a("el-dialog", {
                attrs: {title: "修改", visible: t.editFormVisible},
                on: {
                    "update:visible": function (e) {
                        t.editFormVisible = e
                    }
                }
            }, [a("el-form", {
                ref: "editForm",
                staticClass: "demo-form-inline line-form",
                attrs: {model: t.editForm, rules: t.rules, inline: !0}
            }, [a("el-form-item", {
                attrs: {
                    label: "费用科目",
                    "label-width": t.formLabe2Width,
                    prop: "subject"
                }
            }, [a("el-input", {
                attrs: {"auto-complete": "off"}, model: {
                    value: t.editForm.subject, callback: function (e) {
                        t.editForm.subject = e
                    }, expression: "editForm.subject"
                }
            })], 1), t._v(" "), a("el-form-item", {
                attrs: {
                    label: "金额",
                    type: "number",
                    "label-width": t.formLabe2Width,
                    prop: "money"
                }
            }, [a("el-input", {
                attrs: {"auto-complete": "off"}, model: {
                    value: t.editForm.money, callback: function (e) {
                        t.editForm.money = e
                    }, expression: "editForm.money"
                }
            })], 1), t._v(" "), a("el-form-item", {
                attrs: {
                    label: "发生时间",
                    "label-width": t.formLabe2Width,
                    prop: "date"
                }
            }, [a("el-date-picker", {
                staticStyle: {width: "100%"},
                attrs: {type: "date", placeholder: "选择日期"},
                on: {change: t.dateChangeEdit},
                model: {
                    value: t.editForm.date, callback: function (e) {
                        t.editForm.date = e
                    }, expression: "editForm.date"
                }
            })], 1), t._v(" "), a("el-form-item", {
                attrs: {
                    label: "备注",
                    "label-width": t.formLabe2Width
                }
            }, [a("el-input", {
                attrs: {"auto-complete": "off"}, model: {
                    value: t.editForm.remark, callback: function (e) {
                        t.editForm.remark = e
                    }, expression: "editForm.remark"
                }
            })], 1)], 1), t._v(" "), a("div", {
                staticClass: "dialog-footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [a("el-button", {
                on: {
                    click: function (e) {
                        t.editFormVisible = !1
                    }
                }
            }, [t._v("取 消")]), t._v(" "), a("el-button", {
                attrs: {type: "primary"}, on: {
                    click: function (e) {
                        t.submitEditForm("editForm")
                    }
                }
            }, [t._v("确 定")])], 1)], 1)], 1)
        }, r = [], i = {render: o, staticRenderFns: r};
        e.a = i
    }, q8zI: function (t, e) {
    }, qayR: function (t, e, a) {
        "use strict";

        function o(t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"), a = window.location.search.substr(1).match(e);
            return null != a ? unescape(a[2]) : null
        }

        var r = a("woOf"), i = a.n(r), l = a("DoGJ"), n = a("kMct"), s = a("Vkxs");
        e.a = {
            components: {ElCol: n.a, ElRow: l.a}, name: "apply", data: function () {
                return {
                    basicForm: {theme: "", number: "", dep: ""},
                    tableData: [],
                    addForm: {subject: "", money: "", date: "", remark: ""},
                    addFormVisible: !1,
                    editForm: {},
                    editFormVisible: !1,
                    labelWidth: "160px",
                    formLabe2Width: "180px",
                    rules: {
                        theme: [{required: !0, message: "请输入费用主题", trigger: "blur"}],
                        number: [{required: !0, message: "请输入费用编号", trigger: "blur"}],
                        dep: [{required: !0, message: "请输入归属部门", trigger: "blur"}],
                        subject: [{required: !0, message: "请选择费用科目", trigger: "blur"}],
                        money: [{
                            validator: function (t, e, a) {
                                if (!e) return a(new Error("金额不能为空！"));
                                var o = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/;
                                setTimeout(function () {
                                    o.test(e) ? a() : a(new Error("请输入数字保留两位小数！"))
                                }, 300)
                            }, required: !0, trigger: "blur"
                        }],
                        date: [{required: !0, message: "请选择日期"}]
                    },
                    editIndex: 0,
                    total: 0
                }
            }, created: function () {
                var t, e = new RegExp("(^|&)pocCode=([^&]*)(&|$)", "i"), a = window.location.search.substr(1).match(e),
                    o = this;
                null != a && (t = unescape(a[2])), "" != t && void 0 != t && this.$http.get(s.a.url + s.a.portC + "busPoc?code=" + t).then(function (t) {
                    o.basicForm.theme = t.body.title, o.basicForm.number = t.body.code, o.basicForm.dep = t.body.department, o.tableData = t.body.detail
                }, function (t) {
                    console.info(t)
                })
            }, watch: {
                tableData: {
                    handler: function (t, e) {
                        var a = this;
                        this.total = 0;
                        for (var o = 0; o < a.tableData.length; o++) this.total += parseFloat(this.tableData[o].money);
                        console.log(this.total)
                    }, deep: !0
                }
            }, methods: {
                add: function () {
                    this.addFormVisible = !0
                }, edit: function (t, e) {
                    this.editFormVisible = !0, this.editIndex = e, this.editForm = i()({}, this.tableData[e])
                }, deleteDta: function (t, e) {
                    this.tableData.splice(e, 1)
                }, submit: function (t) {
                    var e = this, a = this, r = o("processDefinitionKey"), i = o("pocCode");
                    this.$refs[t].validate(function (t) {
                        if (!t) return console.log("error submit!!"), !1;
                        if ("" != i && void 0 != i) {
                            var l = o("taskId");
                            return void e.$http.post(s.a.url + s.a.portP + "runtime/tasks/" + l, {action: "complete"}).then(function (t) {
                                window.location.href = s.a.url + s.a.portC + "businessProcessManager/html/run-task.html"
                            })
                        }
                        a.$http.post(s.a.url + s.a.portC + "busPoc", {
                            title: a.basicForm.theme,
                            code: a.basicForm.number,
                            department: a.basicForm.dep,
                            detail: a.tableData
                        }).then(function (t) {
                            a.$http.post(s.a.url + s.a.portP + "runtime/process-instances", {
                                processDefinitionKey: r,
                                businessKey: t.data
                            }).then(function (t) {
                                var e, a = t.data.id;
                                e = null != a ? "启动成功" : "启动失败", this.$message({
                                    message: e,
                                    type: "warning"
                                }), window.location.href = s.a.url + s.a.portC + "businessProcessManager/html/run-task.html"
                            })
                        })
                    })
                }, pass: function () {
                    var t = o("pocCode");
                    if ("" != t && void 0 != t) {
                        var e = o("taskId");
                        this.$http.post(s.a.url + s.a.portP + "runtime/tasks/" + e, {
                            action: "complete",
                            variables: [{name: "pass", value: !0, scope: "local", type: "boolean"}]
                        }).then(function (t) {
                            window.location.href = s.a.url + s.a.portC + "businessProcessManager/html/run-task.html"
                        })
                    }
                }, nopass: function () {
                    var t = o("pocCode");
                    if ("" != t && void 0 != t) {
                        var e = o("taskId");
                        this.$http.post(s.a.url + s.a.portP + "runtime/tasks/" + e, {
                            action: "complete",
                            variables: [{name: "pass", value: !1, scope: "local", type: "boolean"}]
                        }).then(function (t) {
                            window.location.href = s.a.url + s.a.portC + "businessProcessManager/html/run-task.html"
                        })
                    }
                }, submitAddForm: function (t) {
                    var e = this;
                    this.$refs[t].validate(function (t) {
                        if (!t) return console.log("error submit!!"), !1;
                        e.addFormVisible = !1, e.tableData.push(e.addForm), e.addForm = i()({}, {
                            subject: "",
                            money: "",
                            date: "",
                            remark: ""
                        })
                    })
                }, submitEditForm: function (t) {
                    var e = this;
                    this.$refs[t].validate(function (t) {
                        if (!t) return console.log("error submit!!"), !1;
                        e.editFormVisible = !1, e.tableData[e.editIndex] = i()({}, e.editForm), console.log(e.editForm), e.tableData.push({}), e.tableData.pop({})
                    })
                }, dateChangeAdd: function (t) {
                    this.addForm.date = t
                }, dateChangeEdit: function (t) {
                    this.editForm.date = t
                }
            }
        }
    }, xJD8: function (t, e, a) {
        "use strict";
        e.a = {name: "app"}
    }
}, ["NHnr"]);
//# sourceMappingURL=app.83b41da21de7eb2f2478.js.map