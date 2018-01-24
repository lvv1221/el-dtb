<template>
    <div class="pop">
        <div class="pop-header">
            <div class="header-box clearfix">
                <h3 class="fl">Quick answers</h3>
            </div>
        </div>
        <div class="pop-content">
            <div class="pop-quick-answer">
                <div class="living-time"><i class="icon-clock"></i><span>{{time}}</span></div>
                <div class="pop-table">
                    <ul class="table-ul clearfix">
                        <li>Question Number</li>
                        <li>Submit Radio</li>
                        <li>Report</li>
                        <li>Answer</li>
                        <li>Correct Radio</li>
                        <li>Details</li>
                    </ul>
                    <div class="table-body perfect_scroll ps-container">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                            <tr v-for="tr in tableData">
                                <td>{{tr.questionNo}}</td>
                                <td>
                                    <span>{{tr.submitCount}}</span>/<span>{{tr.studentsCount}}</span>
                                </td>
                                <td>
                                    <div class="report-td clearfix">
                                        <div class="fl group-situation" v-for="op in tr.report">
                                            <div class="bar">
                                                <div class="bar-height" :class="{success: tr.answer === op.option, error: tr.answer && tr.answer !== op.option}" :style="{height:op.rate +'%'}"></div>
                                            </div>
                                            <div class="name">{{op.option}}</div>
                                        </div>
                                    </div>
                                </td>
                                <td v-if="tr.answer">
                                    <strong>{{tr.answer}}</strong>
                                    <a class="color-blue ml20" href="javascript:;">Modify</a>
                                </td>
                                <td v-else>
                                    <a class="color-blue" href="javascript:;">Setting</a>
                                </td>
                                <td><div v-show="tr.correctNum"><span class="color-blue">{{tr.correctNum}}</span>/<span>{{tr.studentsCount}}</span></div></td>
                                <td>
                                    <a class="color-blue" href="javascript:;">View</a>
                                </td>
                            </tr>
<!--                            <tr>
                                <td>002</td>
                                <td>
                                    <span>4</span>/<span>4</span>
                                </td>
                                <td>
                                    <div class="report-td clearfix">
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:75%;"></div>
                                            </div>
                                            <div class="name">A</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">B</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">C</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">D</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">E</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">F</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">√</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">×</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <strong>A</strong>
                                    <a class="color-blue ml20" href="javascript:;">Modify</a>
                                </td>
                                <td><span class="color-blue">3</span>/<span>4</span></td>
                                <td>
                                    <a class="color-blue" href="javascript:;">View</a>
                                </td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td>
                                    <span>4</span>/<span>4</span>
                                </td>
                                <td>
                                    <div class="report-td clearfix">
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height success" style="height:75%;"></div>
                                            </div>
                                            <div class="name">A</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">B</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">C</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">D</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">E</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">F</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">√</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">×</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    &lt;!&ndash;<strong>A</strong>&ndash;&gt;
                                    <a class="color-blue" href="javascript:;">Setting</a>
                                </td>
                                <td><span class="color-blue">3</span>/<span>4</span></td>
                                <td>
                                    <a class="color-blue" href="javascript:;">View</a>
                                </td>
                            </tr>
                            <tr>
                                <td>004</td>
                                <td>
                                    <span>4</span>/<span>4</span>
                                </td>
                                <td>
                                    <div class="report-td clearfix">
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height error" style="height:75%;"></div>
                                            </div>
                                            <div class="name">A</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">B</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">C</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">D</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">E</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">F</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">√</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">×</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    &lt;!&ndash;<strong>A</strong>&ndash;&gt;
                                    <a class="color-blue" href="javascript:;">Setting</a>
                                </td>
                                <td><span class="color-blue">3</span>/<span>4</span></td>
                                <td>
                                    <a class="color-blue" href="javascript:;">View</a>
                                </td>
                            </tr>
                            <tr>
                                <td>005</td>
                                <td>
                                    <span>4</span>/<span>4</span>
                                </td>
                                <td>
                                    <div class="report-td clearfix">
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:75%;"></div>
                                            </div>
                                            <div class="name">A</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">B</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">C</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">D</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">E</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">F</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">√</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">×</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <strong>A</strong>
                                    <a class="color-blue ml20" href="javascript:;">Modify</a>
                                </td>
                                <td><span class="color-blue">3</span>/<span>4</span></td>
                                <td>
                                    <a class="color-blue" href="javascript:;">View</a>
                                </td>
                            </tr>
                            <tr>
                                <td>006</td>
                                <td>
                                    <span>4</span>/<span>4</span>
                                </td>
                                <td>
                                    <div class="report-td clearfix">
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:75%;"></div>
                                            </div>
                                            <div class="name">A</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">B</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">C</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">D</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">E</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">F</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">√</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">×</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <strong>A</strong>
                                    <a class="color-blue ml20" href="javascript:;">Modify</a>
                                </td>
                                <td><span class="color-blue">3</span>/<span>4</span></td>
                                <td>
                                    <a class="color-blue" href="javascript:;">View</a>
                                </td>
                            </tr>
                            <tr>
                                <td>007</td>
                                <td>
                                    <span>4</span>/<span>4</span>
                                </td>
                                <td>
                                    <div class="report-td clearfix">
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:75%;"></div>
                                            </div>
                                            <div class="name">A</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">B</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">C</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">D</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">E</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">F</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">√</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">×</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <strong>A</strong>
                                    <a class="color-blue ml20" href="javascript:;">Modify</a>
                                </td>
                                <td><span class="color-blue">3</span>/<span>4</span></td>
                                <td>
                                    <a class="color-blue" href="javascript:;">View</a>
                                </td>
                            </tr>
                            <tr>
                                <td>008</td>
                                <td>
                                    <span>4</span>/<span>4</span>
                                </td>
                                <td>
                                    <div class="report-td clearfix">
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:75%;"></div>
                                            </div>
                                            <div class="name">A</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">B</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">C</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">D</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">E</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">F</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">√</div>
                                        </div>
                                        <div class="fl group-situation">
                                            <div class="bar">
                                                <div class="bar-height" style="height:0;"></div>
                                            </div>
                                            <div class="name">×</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <strong>A</strong>
                                    <a class="color-blue ml20" href="javascript:;">Modify</a>
                                </td>
                                <td><span class="color-blue">3</span>/<span>4</span></td>
                                <td>
                                    <a class="color-blue" href="javascript:;">View</a>
                                </td>
                            </tr>-->
                            </tbody>
                        </table>
                       <!-- <div class="ps-scrollbar-x-rail" style="width: 1248px; display: none; left: 0px; bottom: 3px;"><div class="ps-scrollbar-x" style="left: 0px; width: 0px;"></div></div>
                        <div class="ps-scrollbar-y-rail" style="top: 0px; height: 438px; display: inherit; right: 8px;"><div class="ps-scrollbar-y" style="top: 0px; height: 328px;"></div></div>-->
                    </div>
                </div>
            </div>
            <div class="btn-box pop-btn tc">
                <button class="dtb-btn time-up-btn">Set answers</button>
                <button class="dtb-btn close-btn ml5">Close</button>
            </div>
            <div class="fix-btn fix-btn-left">
                <a href="javascript:;" class="min-btn"></a>
                <a href="javascript:;" class="closef-btn"></a>
            </div>
            <div class="fix-btn fix-btn-right">
                <a href="javascript:;" class="min-btn"></a>
                <a href="javascript:;" class="closef-btn"></a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'quick-answer',
    data () {
      return {
        tableData: [{
          questionNo: 1,
          studentsCount: 4,
          submitCount: 3,
          report: [{
            option: 'A',
            selectNums: 2
          }, {
            option: 'B',
            selectNums: 1
          }, {
            option: 'C',
            selectNums: 0
          }, {
            option: 'D',
            selectNums: 0
          }, {
            option: 'E',
            selectNums: 0
          }, {
            option: 'F',
            selectNums: 0
          }, {
            option: '√',
            selectNums: 0
          }, {
            option: '×',
            selectNums: 0
          }]
        }, {
          questionNo: 2,
          studentsCount: 4,
          submitCount: 3,
          report: [{
            option: 'A',
            selectNums: 2
          }, {
            option: 'B',
            selectNums: 1
          }, {
            option: 'C',
            selectNums: 0
          }, {
            option: 'D',
            selectNums: 0
          }, {
            option: 'E',
            selectNums: 0
          }, {
            option: 'F',
            selectNums: 0
          }, {
            option: '√',
            selectNums: 0
          }, {
            option: '×',
            selectNums: 0
          }]
        }, {
          questionNo: 3,
          studentsCount: 4,
          submitCount: 3,
          report: [{
            option: 'A',
            selectNums: 2
          }, {
            option: 'B',
            selectNums: 1
          }, {
            option: 'C',
            selectNums: 0
          }, {
            option: 'D',
            selectNums: 0
          }, {
            option: 'E',
            selectNums: 0
          }, {
            option: 'F',
            selectNums: 0
          }, {
            option: '√',
            selectNums: 0
          }, {
            option: '×',
            selectNums: 0
          }]
        }, {
          questionNo: 4,
          studentsCount: 4,
          submitCount: 3,
          report: [{
            option: 'A',
            selectNums: 2
          }, {
            option: 'B',
            selectNums: 1
          }, {
            option: 'C',
            selectNums: 0
          }, {
            option: 'D',
            selectNums: 0
          }, {
            option: 'E',
            selectNums: 0
          }, {
            option: 'F',
            selectNums: 0
          }, {
            option: '√',
            selectNums: 0
          }, {
            option: '×',
            selectNums: 0
          }]
        }, {
          questionNo: 5,
          studentsCount: 4,
          submitCount: 3,
          report: [{
            option: 'A',
            selectNums: 2
          }, {
            option: 'B',
            selectNums: 1
          }, {
            option: 'C',
            selectNums: 0
          }, {
            option: 'D',
            selectNums: 0
          }, {
            option: 'E',
            selectNums: 0
          }, {
            option: 'F',
            selectNums: 0
          }, {
            option: '√',
            selectNums: 0
          }, {
            option: '×',
            selectNums: 0
          }]
        }, {
          questionNo: 6,
          studentsCount: 4,
          submitCount: 3,
          report: [{
            option: 'A',
            selectNums: 2
          }, {
            option: 'B',
            selectNums: 1
          }, {
            option: 'C',
            selectNums: 0
          }, {
            option: 'D',
            selectNums: 0
          }, {
            option: 'E',
            selectNums: 0
          }, {
            option: 'F',
            selectNums: 0
          }, {
            option: '√',
            selectNums: 0
          }, {
            option: '×',
            selectNums: 0
          }]
        }, {
          questionNo: 7,
          studentsCount: 4,
          submitCount: 3,
          report: [{
            option: 'A',
            selectNums: 2
          }, {
            option: 'B',
            selectNums: 1
          }, {
            option: 'C',
            selectNums: 0
          }, {
            option: 'D',
            selectNums: 0
          }, {
            option: 'E',
            selectNums: 0
          }, {
            option: 'F',
            selectNums: 0
          }, {
            option: '√',
            selectNums: 0
          }, {
            option: '×',
            selectNums: 0
          }]
        }, {
          questionNo: 8,
          studentsCount: 4,
          submitCount: 3,
          report: [{
            option: 'A',
            selectNums: 2
          }, {
            option: 'B',
            selectNums: 1
          }, {
            option: 'C',
            selectNums: 0
          }, {
            option: 'D',
            selectNums: 0
          }, {
            option: 'E',
            selectNums: 0
          }, {
            option: 'F',
            selectNums: 0
          }, {
            option: '√',
            selectNums: 0
          }, {
            option: '×',
            selectNums: 0
          }]
        }],
        time: '00:30'
      }
    },
    created () {
      this.addAnswerstInfo()
    },
    methods: {
      getRate (numerator, denominator) {
        let rate = Math.round((numerator / denominator) * 100)
        return rate
      },
      setRates (list, attri, num) {
        for (let option of list) {
          let rate = this.getRate(option[attri], num)
          this.$set(option, 'rate', rate)
        }
        // console.log(JSON.stringify(this.answersList))
      },
      addAnswerstInfo () {
        for (let dr of this.tableData) {
          this.$set(dr, 'answer', '')
          this.$set(dr, 'correctNum', '')
          this.setRates(dr.report, 'selectNums', dr.studentsCount)
        }
        console.log(this.tableData)
      }
    }
  }
</script>

<style scoped>

</style>