(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var colsDeal = [{
            id: 'ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'TITLE',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'TYPE_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'STAGE_ID',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'PROBABILITY',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CURRENCY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'OPPORTUNITY',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'IS_MANUAL_OPPORTUNITY',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'TAX_VALUE',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'LEAD_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'COMPANY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CONTACT_ID',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'QUOTE_ID',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'BEGINDATE',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'CLOSEDATE',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'ASSIGNED_BY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CREATED_BY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'MODIFY_BY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'DATE_CREATE',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'DATE_MODIFY',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'OPENED',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CLOSED',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'COMMENTS',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDITIONAL_INFO',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'LOCATION_ID',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CATEGORY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'STAGE_SEMANTIC_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'IS_NEW',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'IS_RECURRING',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'IS_RETURN_CUSTOMER',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'IS_REPEATED_APPROACH',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'SOURCE_ID',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'SOURCE_DESCRIPTION',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ORIGINATOR_ID',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ORIGIN_ID',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_SOURCE',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_MEDIUM',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_CAMPAIGN',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_CONTENT',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_TERM',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_ZOOM_MEET_LINK',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_ZOOM_MEET_TZ',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_1610953227163',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_1611127494870',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'Platform_Company_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'Platform_Company_Contract_List',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'Billing_Is_Month',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'Platform_Type',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_1621506888249',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'refresh_date',
            dataType: tableau.dataTypeEnum.datetime
        }];

        var tableDeal = {
            id: "Deals",
            alias: "Deals",
            columns: colsDeal
        };

        var colsProductRows = [{
            id: 'ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'OWNER_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'OWNER_TYPE',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'PRODUCT_ID',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'PRODUCT_NAME',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'ORIGINAL_PRODUCT_NAME',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'PRODUCT_DESCRIPTION',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'PRICE',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'PRICE_EXCLUSIVE',
            dataType: tableau.dataTypeEnum.float
            }, {
            id: 'PRICE_NETTO',
            dataType: tableau.dataTypeEnum.float
            }, {
            id: 'PRICE_BRUTTO',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'PRICE_ACCOUNT',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'QUANTITY',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'DISCOUNT_TYPE_ID',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'DISCOUNT_RATE',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'DISCOUNT_SUM',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'TAX_RATE',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'TAX_INCLUDED',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CUSTOMIZED',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'MEASURE_CODE',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'MEASURE_NAME',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'SORT',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'refresh_date',
            dataType: tableau.dataTypeEnum.datetime
        }];

        var tableProductRows = {
            id: "ProductRows",
            alias: "ProductRows",
            columns: colsProductRows
        };

        var colsCompany = [{
            id: 'ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'COMPANY_TYPE',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'TITLE',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'LEAD_ID',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'HAS_PHONE',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'HAS_EMAIL',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'HAS_IMOL',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'ASSIGNED_BY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CREATED_BY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'MODIFY_BY_ID',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'BANKING_DETAILS',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'INDUSTRY',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'REVENUE',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CURRENCY_ID',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'EMPLOYEES',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'COMMENTS',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'DateTimeOfNextCall',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'DATE_CREATE',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'DATE_MODIFY',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'OPENED',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'IS_MY_COMPANY',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ORIGINATOR_ID',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ORIGIN_ID',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ORIGIN_VERSION',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS_2',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS_CITY',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS_POSTAL_CODE',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS_REGION',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS_PROVINCE',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS_COUNTRY',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS_COUNTRY_CODE',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS_LOC_ADDR_ID',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'ADDRESS_LEGAL',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'REG_ADDRESS',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'REG_ADDRESS_2',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'REG_ADDRESS_CITY',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'REG_ADDRESS_POSTAL_CODE',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'REG_ADDRESS_REGION',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'REG_ADDRESS_PROVINCE',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'REG_ADDRESS_COUNTRY',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'REG_ADDRESS_COUNTRY_CODE',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'REG_ADDRESS_LOC_ADDR_ID',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_SOURCE',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_MEDIUM',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_CAMPAIGN',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_CONTENT',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UTM_TERM',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_3722029062681',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_3730829761437',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_3731193555098',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_3731193555117',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_3734450537149',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'UF_CRM_1611038101329',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'refresh_date',
            dataType: tableau.dataTypeEnum.datetime
        }];

        var tableCompany = {
            id: "Companies",
            alias: "Companies",
            columns: colsCompany
        };

        var colsInvoice = [{
            id: 'ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'ACCOUNT_NUMBER',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'COMMENTS',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CURRENCY',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'DATE_BILL',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'DATE_INSERT',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'DATE_MARKED',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'DATE_PAY_BEFORE',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'DATE_PAYED',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'DATE_STATUS',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'DATE_UPDATE',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'CREATED_BY',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'EMP_PAYED_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'EMP_STATUS_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'LID',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'XML_ID',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'ORDER_TOPIC',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'PAY_SYSTEM_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'PAY_VOUCHER_DATE',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'PAY_VOUCHER_NUM',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'PAYED',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'PERSON_TYPE_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'PRICE',
            dataType: tableau.dataTypeEnum.float
            // }, {
            // id: 'REASON_MARKED',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'RESPONSIBLE_EMAIL',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'RESPONSIBLE_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'RESPONSIBLE_LAST_NAME',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'RESPONSIBLE_LOGIN',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'RESPONSIBLE_NAME',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'RESPONSIBLE_PERSONAL_PHOTO',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'RESPONSIBLE_SECOND_NAME',
            // dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'RESPONSIBLE_WORK_POSITION',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'STATUS_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'TAX_VALUE',
            dataType: tableau.dataTypeEnum.float
            }, {
            id: 'IS_RECURRING',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'UF_COMPANY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'UF_CONTACT_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'UF_MYCOMPANY_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'UF_DEAL_ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'UF_QUOTE_ID',
            dataType: tableau.dataTypeEnum.string
            // }, {
            // id: 'USER_DESCRIPTION',
            // dataType: tableau.dataTypeEnum.string
            }, {
            id: 'refresh_date',
            dataType: tableau.dataTypeEnum.datetime
        }];

        var tableInvoice = {
            id: "Invoices",
            alias: "Invoices",
            columns: colsInvoice
        };

        var colsDealCategory = [{
            id: 'ID',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'CREATED_DATE',
            dataType: tableau.dataTypeEnum.datetime
            }, {
            id: 'NAME',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'IS_LOCKED',
            dataType: tableau.dataTypeEnum.string
            }, {
            id: 'SORT',
            dataType: tableau.dataTypeEnum.int
            }, {
            id: 'refresh_date',
            dataType: tableau.dataTypeEnum.datetime
        }];

        var tableDealCategory = {
            id: "DealCategory",
            alias: "DealCategory",
            columns: colsDealCategory
        };

        schemaCallback([tableDeal, tableCompany, tableProductRows, tableInvoice, tableDealCategory]);

    };

    myConnector.getData = function(table, doneCallback) {
        var tempdata = JSON.parse(tableau.connectionData),
            proxy = 'https://cors-anywhere.herokuapp.com/',
            host = 'https://crm.bitri24.ru/rest/',
            refreshDate = new Date().toISOString(),
            dateFormat = "Y-MM-DD HH:mm:ss";
        if (table.tableInfo.id == 'Deals') {
            async function deals() {
                var tableData = [],
                    dealsID = [],
                    totalDeals = 0;
                await $.ajax({
                    url: proxy + host + tempdata.deal_list_token + '/crm.deal.list.json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    type: "GET",
                    success: function(resp) {
                        totalDeals = resp.total;
                    },
                    error: function () {
                        console.log("error");
                    }
                });

                for (var j = 0; j <= totalDeals; j = j + 50) {
                    await $.ajax({
                        url: proxy + host + tempdata.deal_list_token + '/crm.deal.list.json?start=' + j.toString(),
                        headers: {
                            "Content-Type": "application/json"
                        },
                        type: "GET",
                        success: function(resp) {
                            var feat = resp.result;
                            for (var i = 0, len = feat.length; i < len; i++) {
                                dealsID.push(feat[i].ID);
                            }
                        },
                        error: function () {
                            console.log("error");
                        }
                    });
                };

                for (var j = 0, len = dealsID.length; j < len; j++) {
                    await $.ajax({
                        url: proxy + host + tempdata.deal_get_token + '/crm.deal.get.json?ID=' + dealsID[j],
                        headers: {
                            "Content-Type": "application/json"
                        },
                        type: "GET",
                        success: function(resp) {
                            var feat = resp.result;
                            tableData.push({
                                "ID": feat.ID,
                                "TITLE": feat.TITLE,
                                "TYPE_ID": feat.TYPE_ID,
                                "STAGE_ID": feat.STAGE_ID,
                                // "PROBABILITY": feat.PROBABILITY,
                                "CURRENCY_ID": feat.CURRENCY_ID,
                                "OPPORTUNITY": feat.OPPORTUNITY,
                                "IS_MANUAL_OPPORTUNITY": feat.IS_MANUAL_OPPORTUNITY,
                                "TAX_VALUE": feat.TAX_VALUE,
                                "LEAD_ID": feat.LEAD_ID,
                                "COMPANY_ID": feat.COMPANY_ID,
                                "CONTACT_ID": feat.CONTACT_ID,
                                // "QUOTE_ID": feat.QUOTE_ID,
                                "BEGINDATE": moment(feat.BEGINDATE).format(dateFormat),
                                "CLOSEDATE": moment(feat.CLOSEDATE).format(dateFormat),
                                "ASSIGNED_BY_ID": feat.ASSIGNED_BY_ID,
                                "CREATED_BY_ID": feat.CREATED_BY_ID,
                                "MODIFY_BY_ID": feat.MODIFY_BY_ID,
                                "DATE_CREATE": moment(feat.DATE_CREATE).format(dateFormat),
                                "DATE_MODIFY": moment(feat.DATE_MODIFY).format(dateFormat),
                                "OPENED": feat.OPENED,
                                "CLOSED": feat.CLOSED,
                                // "COMMENTS": feat.COMMENTS,
                                // "ADDITIONAL_INFO": feat.ADDITIONAL_INFO,
                                // "LOCATION_ID": feat.LOCATION_ID,
                                "CATEGORY_ID": feat.CATEGORY_ID,
                                "STAGE_SEMANTIC_ID": feat.STAGE_SEMANTIC_ID,
                                "IS_NEW": feat.IS_NEW,
                                "IS_RECURRING": feat.IS_RECURRING,
                                "IS_RETURN_CUSTOMER": feat.IS_RETURN_CUSTOMER,
                                "IS_REPEATED_APPROACH": feat.IS_REPEATED_APPROACH,
                                // "SOURCE_ID": feat.SOURCE_ID,
                                // "SOURCE_DESCRIPTION": feat.SOURCE_DESCRIPTION,
                                // "ORIGINATOR_ID": feat.ORIGINATOR_ID,
                                // "ORIGIN_ID": feat.ORIGIN_ID,
                                // "UTM_SOURCE": feat.UTM_SOURCE,
                                // "UTM_MEDIUM": feat.UTM_MEDIUM,
                                // "UTM_CAMPAIGN": feat.UTM_CAMPAIGN,
                                // "UTM_CONTENT": feat.UTM_CONTENT,
                                // "UTM_TERM": feat.UTM_TERM,
                                // "UF_CRM_ZOOM_MEET_LINK": feat.UF_CRM_ZOOM_MEET_LINK,
                                // "UF_CRM_ZOOM_MEET_TZ": feat.UF_CRM_ZOOM_MEET_TZ,
                                // "UF_CRM_1610953227163": feat.UF_CRM_1610953227163,
                                // "UF_CRM_1611127494870": feat.UF_CRM_1611127494870,
                                "Platform_Company_ID": feat.UF_CRM_1611821684314,
                                "Platform_Company_Contract_List": feat.UF_CRM_1611821808935,
                                "Billing_Is_Month": feat.UF_CRM_1611821914609,
                                "Platform_Type": feat.UF_CRM_1611821978422,
                                // "UF_CRM_1621506888249": feat.UF_CRM_1621506888249,
                                "refresh_date": moment(refreshDate).format(dateFormat),
                            });
                        },
                        error: function () {
                            console.log("error");
                        }
                    });      
                };
                table.appendRows(tableData);
                doneCallback(); 
            }
            deals()
        }
        
        if (table.tableInfo.id == 'ProductRows') {
            async function productRows() {
                var tableData = [],
                    dealsID = [],
                    totalDeals = 0;
                await $.ajax({
                    url: proxy + host + tempdata.deal_list_token + '/crm.deal.list.json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    type: "GET",
                    success: function(resp) {
                        totalDeals = resp.total;
                    },
                    error: function () {
                        console.log("error");
                    }
                });

                for (var j = 0; j <= totalDeals; j = j + 50) {   
                    await $.ajax({
                        url: proxy + host + tempdata.deal_list_token + '/crm.deal.list.json?start=' + j.toString(),
                        headers: {
                            "Content-Type": "application/json"
                        },
                        type: "GET",
                        success: function(resp) {
                            var feat = resp.result;
                            for (var i = 0, len = feat.length; i < len; i++) {
                                dealsID.push(feat[i].ID);
                            }
                        },
                        error: function () {
                            console.log("error");
                        }
                    });
                };

                for (var j = 0, len = dealsID.length; j < len; j++) {
                    console.log(j)
                    await $.ajax({
                        url: proxy + host + tempdata.deal_get_token + '/crm.deal.productrows.get.json?ID=' + dealsID[j],
                        headers: {
                            "Content-Type": "application/json"
                        },
                        type: "GET",
                        success: function(resp) {
                            var feat = resp.result;
                            for (var i = 0, len = feat.length; i < len; i++) {
                                tableData.push({
                                    "ID": feat[i].ID,
                                    "OWNER_ID": feat[i].OWNER_ID,
                                    "OWNER_TYPE": feat[i].OWNER_TYPE,
                                    "PRODUCT_ID": feat[i].PRODUCT_ID,
                                    "PRODUCT_NAME": feat[i].PRODUCT_NAME,
                                    "ORIGINAL_PRODUCT_NAME": feat[i].ORIGINAL_PRODUCT_NAME,
                                    "PRODUCT_DESCRIPTION": feat[i].PRODUCT_DESCRIPTION,
                                    "PRICE": feat[i].PRICE,
                                    "PRICE_EXCLUSIVE": feat[i].PRICE_EXCLUSIVE,
                                    "PRICE_NETTO": feat[i].PRICE_NETTO,
                                    "PRICE_BRUTTO": feat[i].PRICE_BRUTTO,
                                    "PRICE_ACCOUNT": feat[i].PRICE_ACCOUNT,
                                    "QUANTITY": feat[i].QUANTITY,
                                    "DISCOUNT_TYPE_ID": feat[i].DISCOUNT_TYPE_ID,
                                    "DISCOUNT_RATE": feat[i].DISCOUNT_RATE,
                                    "DISCOUNT_SUM": feat[i].DISCOUNT_SUM,
                                    "TAX_RATE": feat[i].TAX_RATE,
                                    "TAX_INCLUDED": feat[i].TAX_INCLUDED,
                                    "CUSTOMIZED": feat[i].CUSTOMIZED,
                                    "MEASURE_CODE": feat[i].MEASURE_CODE,
                                    "MEASURE_NAME": feat[i].MEASURE_NAME,
                                    "SORT": feat[i].SORT,
                                    "refresh_date": moment(refreshDate).format(dateFormat),
                                });
                            }
                        },
                        error: function () {
                            console.log("error");
                        }
                    });      
                };
                table.appendRows(tableData);
                doneCallback(); 
            }
            productRows()
        }

        if (table.tableInfo.id == 'Companies') {
            async function companies() {
                var tableData = [],
                    totalCompanies = 0;
                await $.ajax({
                    url: proxy + host + tempdata.company_token + '/crm.company.list.json?&select[]=*&select[]=UF_*',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    type: "GET",
                    success: function(resp) {
                        totalCompanies = resp.total;
                    },
                    error: function () {
                        console.log("error");
                    }
                });

                for (var j = 0; j <= totalCompanies; j = j + 50) {   
                    await $.ajax({
                        url: proxy + host + tempdata.company_token + '/crm.company.list.json?&select[]=*&select[]=UF_*&start=' + j.toString(),
                        headers: {
                            "Content-Type": "application/json"
                        },
                        type: "GET",
                        success: function(resp) {
                            var feat = resp.result;
                            for (var i = 0, len = feat.length; i < len; i++) {
                                tableData.push({
                                    "ID": feat[i].ID,
                                    "TITLE": feat[i].TITLE,
                                    "COMPANY_TYPE": feat[i].COMPANY_TYPE,
                                    "LEAD_ID": feat[i].LEAD_ID,
                                    // "HAS_PHONE": feat[i].HAS_PHONE,
                                    // "HAS_EMAIL": feat[i].HAS_EMAIL,
                                    // "HAS_IMOL": feat[i].HAS_IMOL,
                                    "ASSIGNED_BY_ID": feat[i].ASSIGNED_BY_ID,
                                    "CREATED_BY_ID": feat[i].CREATED_BY_ID,
                                    "MODIFY_BY_ID": feat[i].MODIFY_BY_ID,
                                    // "BANKING_DETAILS": feat[i].BANKING_DETAILS,
                                    // "INDUSTRY": feat[i].INDUSTRY,
                                    "REVENUE": feat[i].REVENUE,
                                    "CURRENCY_ID": feat[i].CURRENCY_ID,
                                    // "EMPLOYEES": feat[i].EMPLOYEES,
                                    // "COMMENTS": feat[i].COMMENTS,
                                    "DATE_CREATE": moment(feat[i].DATE_CREATE).format(dateFormat),
                                    "DATE_MODIFY": moment(feat[i].DATE_MODIFY).format(dateFormat),
                                    "DateTimeOfNextCall": moment(feat[i].DateTimeOfNextCall).format(dateFormat),
                                    "OPENED": feat[i].OPENED,
                                    "IS_MY_COMPANY": feat[i].IS_MY_COMPANY,
                                    // "ORIGINATOR_ID": feat[i].ORIGINATOR_ID,
                                    // "ORIGIN_ID": feat[i].ORIGIN_ID,
                                    // "ORIGIN_VERSION": feat[i].ORIGIN_VERSION,
                                    // "ADDRESS": feat[i].ADDRESS,
                                    // "ADDRESS_2": feat[i].ADDRESS_2,
                                    // "ADDRESS_CITY": feat[i].ADDRESS_CITY,
                                    // "ADDRESS_POSTAL_CODE": feat[i].ADDRESS_POSTAL_CODE,
                                    // "ADDRESS_REGION": feat[i].ADDRESS_REGION,
                                    // "ADDRESS_PROVINCE": feat[i].ADDRESS_PROVINCE,
                                    // "ADDRESS_COUNTRY": feat[i].ADDRESS_COUNTRY,
                                    // "ADDRESS_COUNTRY_CODE": feat[i].ADDRESS_COUNTRY_CODE,
                                    // "ADDRESS_LOC_ADDR_ID": feat[i].ADDRESS_LOC_ADDR_ID,
                                    // "ADDRESS_LEGAL": feat[i].ADDRESS_LEGAL,
                                    // "REG_ADDRESS": feat[i].REG_ADDRESS,
                                    // "REG_ADDRESS_2": feat[i].REG_ADDRESS_2,
                                    // "REG_ADDRESS_CITY": feat[i].REG_ADDRESS_CITY,
                                    // "REG_ADDRESS_POSTAL_CODE": feat[i].REG_ADDRESS_POSTAL_CODE,
                                    // "REG_ADDRESS_REGION": feat[i].REG_ADDRESS_REGION,
                                    // "REG_ADDRESS_PROVINCE": feat[i].REG_ADDRESS_PROVINCE,
                                    // "REG_ADDRESS_COUNTRY": feat[i].REG_ADDRESS_COUNTRY,
                                    // "REG_ADDRESS_COUNTRY_CODE": feat[i].REG_ADDRESS_COUNTRY_CODE,
                                    // "REG_ADDRESS_LOC_ADDR_ID": feat[i].REG_ADDRESS_LOC_ADDR_ID,
                                    // "UTM_SOURCE": feat[i].UTM_SOURCE,
                                    // "UTM_MEDIUM": feat[i].UTM_MEDIUM,
                                    // "UTM_CAMPAIGN": feat[i].UTM_CAMPAIGN,
                                    // "UTM_CONTENT": feat[i].UTM_CONTENT,
                                    // "UTM_TERM": feat[i].UTM_TERM,
                                    // 'UF_CRM_3722029062681': feat[i].UF_CRM_3722029062681,
                                    // 'UF_CRM_3730829761437': feat[i].UF_CRM_3730829761437,
                                    // 'UF_CRM_3731193555098': feat[i].UF_CRM_3731193555098,
                                    // 'UF_CRM_3731193555117': feat[i].UF_CRM_3731193555117,
                                    // 'UF_CRM_3734450537149': feat[i].UF_CRM_3734450537149,
                                    // 'UF_CRM_1611038101329': feat[i].UF_CRM_1611038101329,
                                    "refresh_date": moment(refreshDate).format(dateFormat),
                                });
                            }
                        },
                        error: function () {
                            console.log("error");
                        }
                    });
                };
                table.appendRows(tableData);
                doneCallback(); 
            }
            companies()
        }

        if (table.tableInfo.id == 'Invoices') {
            async function invoices() {
                var tableData = [],
                    totalInvoices = 0;
                await $.ajax({
                    url: proxy + host + tempdata.invoice_token + '/crm.invoice.list.json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    type: "GET",
                    success: function(resp) {
                        totalInvoices = resp.total;
                    },
                    error: function () {
                        console.log("error");
                    }
                });

                for (var j = 0; j <= totalInvoices; j = j + 50) {   
                    await $.ajax({
                        url: proxy + host + tempdata.invoice_token + '/crm.invoice.list.json?&start=' + j.toString(),
                        headers: {
                            "Content-Type": "application/json"
                        },
                        type: "GET",
                        success: function(resp) {
                            var feat = resp.result;
                            for (var i = 0, len = feat.length; i < len; i++) {
                                tableData.push({
                                    "ID": feat[i].ID,
                                    "ACCOUNT_NUMBER": feat[i].ACCOUNT_NUMBER,
                                    // "COMMENTS": feat[i].COMMENTS,
                                    "CURRENCY": feat[i].CURRENCY,
                                    "DATE_BILL": moment(feat[i].DATE_BILL).format(dateFormat),
                                    "DATE_INSERT": moment(feat[i].DATE_INSERT).format(dateFormat),
                                    "DATE_MARKED": moment(feat[i].DATE_PAY_BEFORE).format(dateFormat),
                                    "DATE_PAY_BEFORE": moment(feat[i].DATE_PAYED).format(dateFormat),
                                    "DATE_PAYED": moment(feat[i].DATE_PAYED).format(dateFormat),
                                    "DATE_STATUS": moment(feat[i].DATE_STATUS).format(dateFormat),
                                    "DATE_UPDATE": moment(feat[i].DATE_UPDATE).format(dateFormat),
                                    "CREATED_BY": feat[i].CREATED_BY,
                                    "EMP_PAYED_ID": feat[i].EMP_PAYED_ID,
                                    "EMP_STATUS_ID": feat[i].EMP_STATUS_ID,
                                    "LID": feat[i].LID,
                                    // "XML_ID": feat[i].XML_ID,
                                    "ORDER_TOPIC": feat[i].ORDER_TOPIC,
                                    "PAY_SYSTEM_ID": feat[i].PAY_SYSTEM_ID,
                                    "PAY_VOUCHER_DATE": moment(feat[i].PAY_VOUCHER_DATE).format(dateFormat),
                                    "PAY_VOUCHER_NUM": feat[i].PAY_VOUCHER_NUM,
                                    "PAYED": feat[i].PAYED,
                                    "PERSON_TYPE_ID": feat[i].PERSON_TYPE_ID,
                                    "PRICE": parseFloat(feat[i].PRICE),
                                    // "REASON_MARKED": feat[i].REASON_MARKED,
                                    "RESPONSIBLE_EMAIL": feat[i].RESPONSIBLE_EMAIL,
                                    "RESPONSIBLE_ID": feat[i].RESPONSIBLE_ID,
                                    "RESPONSIBLE_LAST_NAME": feat[i].RESPONSIBLE_LAST_NAME,
                                    "RESPONSIBLE_LOGIN": feat[i].RESPONSIBLE_LOGIN,
                                    "RESPONSIBLE_NAME": feat[i].RESPONSIBLE_NAME,
                                    // "RESPONSIBLE_PERSONAL_PHOTO": feat[i].RESPONSIBLE_PERSONAL_PHOTO,
                                    // "RESPONSIBLE_SECOND_NAME": feat[i].RESPONSIBLE_SECOND_NAME,
                                    // "RESPONSIBLE_WORK_POSITION": feat[i].RESPONSIBLE_WORK_POSITION,
                                    "STATUS_ID": feat[i].STATUS_ID,
                                    "TAX_VALUE": parseFloat(feat[i].TAX_VALUE),
                                    "IS_RECURRING": feat[i].IS_RECURRING,
                                    "UF_COMPANY_ID": feat[i].UF_COMPANY_ID,
                                    "UF_CONTACT_ID": feat[i].UF_CONTACT_ID,
                                    "UF_MYCOMPANY_ID": feat[i].UF_MYCOMPANY_ID,
                                    "UF_DEAL_ID": feat[i].UF_DEAL_ID,
                                    "UF_QUOTE_ID": feat[i].UF_QUOTE_ID,
                                    // "USER_DESCRIPTION": feat[i].USER_DESCRIPTION,
                                    "refresh_date": moment(refreshDate).format(dateFormat),
                                });
                            }
                        },
                        error: function () {
                            console.log("error");
                        }
                    });
                };
                table.appendRows(tableData);
                doneCallback(); 
            }
            invoices()
        }

        if (table.tableInfo.id == 'DealCategory') {
            async function dealCategories() {
                var tableData = [],
                    totalCategories = 0;
                await $.ajax({
                    url: proxy + host + tempdata.dealCategory_token + '/crm.dealcategory.list.json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    type: "GET",
                    success: function(resp) {
                        totalInvoices = resp.total;
                    },
                    error: function () {
                        console.log("error");
                    }
                });

                for (var j = 0; j <= totalCategories; j = j + 50) {   
                    await $.ajax({
                        url: proxy + host + tempdata.dealCategory_token + '/crm.dealcategory.list.json?&start=' + j.toString(),
                        headers: {
                            "Content-Type": "application/json"
                        },
                        type: "GET",
                        success: function(resp) {
                            var feat = resp.result;
                            for (var i = 0, len = feat.length; i < len; i++) {
                                tableData.push({
                                    "ID": feat[i].ID,
                                    "CREATED_DATE": moment(feat[i].CREATED_DATE).format(dateFormat),
                                    "NAME": feat[i].NAME,
                                    "IS_LOCKED": feat[i].IS_LOCKED,
                                    "SORT": parseInt(feat[i].SORT),
                                    "refresh_date": moment(refreshDate).format(dateFormat),
                                });
                            }
                        },
                        error: function () {
                            console.log("error");
                        }
                    });
                };
                table.appendRows(tableData);
                doneCallback(); 
            }
            dealCategories()
        }

    };

    tableau.registerConnector(myConnector);

$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Bitrix24 API Data";
        tableau.connectionData = JSON.stringify({deal_list_token: $("#deal_list_token").val(),
                                                 products_token: $("#products_token").val(),
                                                 deal_get_token: $("#deal_get_token").val(),
                                                 company_token: $("#company_token").val(),
                                                 invoice_token: $("#invoice_token").val(),
                                                 dealCategory_token: $("#dealCategory_token").val()})
        tableau.submit();
    });
});

})();