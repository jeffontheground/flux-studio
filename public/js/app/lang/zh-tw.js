define(function() {
    'use strict';

    return {
        general: {
            wait: '處理中，請稍待'
        },
        buttons: {
            next: '下一步'
        },
        support: {
            no_webgl: '您的系統不支援 WebGL，建議您使用其他電腦開啟 FLUX Studio',
            no_vcredist: '請安裝 Visual C++ Redistributable 2015<br/>可以在flux3dp.com找到',
            osx_10_9: 'FLUX Studio 目前不支援 OS X 10.9，敬請更新至更新的版本。'
        },
        generic_error: {
            UNKNOWN_ERROR: "[UE] 請重啟 FLUX Studio",
            OPERATION_ERROR: "[OE] 機器發生狀態衝突，請再試一次",
            SUBSYSTEM_ERROR: "[SE] 請重啟機器",
            UNKNOWN_COMMAND: "[UC] 請更新機器韌體",
            RESOURCE_BUSY: "[RB] 請重新啟動 Delta, 或再試一次"
        },
        device_selection: {
            no_printers: '無法透過 Wi-Fi 偵測到機器，請檢查您與機器的網路連線是否在同個網路下 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/215394548">暸解更多</a>',
            module: 'MODULE',
            status: 'STATUS'
        },
        update: {
            release_note: '版本訊息:',
            firmware: {
                caption: '有新的機器韌體更新',
                message_pattern_1: '"%s" 有新的韌體更新。',
                message_pattern_2: '%s 韌體 v%s 可使用 - 你的版本為 v%s.',
                latest_firmware: {
                    caption: '韌體更新',
                    message: '韌體已經是最新版本',
                    still_update: '檔案更新'
                },
                confirm: '上傳',
                upload_file: '韌體上傳',
                update_success: '韌體更新上傳成功',
                update_fail: '更新失敗'
            },
            software: {
                caption: 'FLUX Studio 有新的軟體更新',
                message_pattern_1: 'FLUX Studio 有新的軟體更新。',
                message_pattern_2: 'FLUX Software v%s 可使用 - 你的版本為 v%s.'
            },
            toolhead: {
                caption: 'FLUX 工具頭有新的韌體更新',
                message_pattern_1: '"%s" 有新的韌體更新。',
                message_pattern_2: 'FLUX Toolhead Firmware v%s 可使用',
                latest_firmware: {
                    caption: '韌體更新',
                    message: '韌體已經是最新版本'
                },
                confirm: '上傳',
                upload_file: '韌體上傳',
                update_success: '韌體更新上傳成功',
                update_fail: '更新失敗',
                waiting: '請確認已安裝工具頭'
            },
            updating: '更新中...',
            skip: '跳過此版本',
            checkingHeadinfo: '檢查工具頭資訊',
            preparing: '準備中...',
            later: '稍候',
            download: '線上更新',
            cannot_reach_internet: '伺服器無法連接<br/>請確認網路連線',
            install: '下載',
            upload: '上傳'
        },
        topmenu: {
            version: '版本',
            sure_to_quit: '確定要結束 FLUX Studio?',
            flux: {
                label: 'Flux',
                about: '關於 FLUX studio',
                preferences: '偏好設定',
                quit: '結束'
            },
            file: {
                label: '檔案',
                import: '匯入',
                save_fcode: '匯出工作',
                save_scene: '匯出場景',
                confirmReset: '是否確定要重置所有設定?'
            },
            edit: {
                label: '編輯',
                duplicate: '重製',
                rotate: '旋轉',
                scale: '縮放',
                clear: '清除場景',
                undo: '復原',
                alignCenter: '置中',
                reset: '重設'
            },
            device: {
                label: '機器',
                new: '新增或設定機器',
                device_monitor: '儀表板',
                device_info: '機器資訊',
                head_info: '工具頭資訊',
                change_filament: '更換線料',
                default_device: '設為預設',
                check_firmware_update: '韌體更新',
                update_delta: '機器韌體',
                update_toolhead: '工具頭韌體',
                calibrate: '校正平台',
                set_to_origin: '回歸原點',
                movement_tests: '執行運動測試',
                scan_laser_calibrate: '打開掃描雷射',
                clean_calibration: '校正平台（清除原始資料）',
                commands: '指令',
                set_to_origin_complete: '機器已回歸原點',
                scan_laser_complete: '掃描雷射已開啟，點擊 "完成" 以關閉雷射',
                movement_tests_complete: '運動測試完成',
                movement_tests_failed: '運動測試失敗。<br/>1. 請確工具頭連接線被正確拉直<br/>2. 上蓋工具頭連接線接頭沒入約一半<br/>3. 可嘗試將工具頭連接線順時針或逆時針旋轉 180 度再插入<br/>4. 參考 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/115003674128">此篇文章</a>',
                download_log: '匯出機器日誌',
                download_log_canceled: '取消日誌下載',
                download_log_error: '不明錯誤發生，請稍候再試一次',
                log: {
                    network: 'Network',
                    hardware: 'Hardware',
                    discover: 'Discover',
                    usb: 'USB',
                    camera: 'Camera',
                    cloud: 'Cloud',
                    player: 'Player',
                    robot: 'Robot'
                },
                finish: '完成',
                cancel: '取消',
                turn_on_head_temperature: '設定列印工具頭溫度'
            },
            window: {
                label: '視窗',
                minimize: '最小化',
                fullscreen: '全螢幕'
            },
            help: {
                label: '說明',
                help_center: '說明中心',
                contact: '聯絡我們',
                tutorial: '列印教學',
                software_update: '軟體更新',
                debug: '錯誤回報',
                forum: '社群論壇'
            },
            account: {
                label: '帳號',
                sign_in: '登入',
                sign_out: '登出'
            }
        },
        initialize: {
            // generic strings
            next: '下一步',
            start: '開始設定',
            skip: '跳過',
            cancel: '取消',
            confirm: '確認',
            connect: '連接',
            back: '返回',
            retry: '重試',
            no_machine : '目前沒有機器或已設定過連線，跳過此步驟',

            // specific caption/content
            invalid_device_name: '機器名稱只能使用中文字，英文字母、數字、空格以及特殊字元  “(”, “)”, “-”, “_”, “’”, “\'”',
            require_device_name: '名稱欄位為必填',
            select_language: '請選擇你想使用的語言',
            change_password: {
                caption: '密碼更改',
                content: '確定要更改密碼嗎?'
            },
            connect_flux: '連接機器',
            via_usb: '使用 USB',
            via_wifi: '使用 WiFi',
            select_machine_type: '請選擇您的機種',
            name_your_flux: '為你的機器取一個獨特的名字',
            wifi_setup: '設定無線網路',
            select_preferred_wifi: '選擇你偏好的網路',
            requires_wifi_password: '需要密碼',
            connecting: '連接中',

            // page specific
            connect_beambox: {
                set_beambox_connection: '設定 Beambox 連線',
                please_goto_touchpad: '請使用 Beambox 觸控面板進行 WiFi 連線綁定',
                tutorial: '1. 點選觸控面板 "設定" > "網際網路" > "設定"\n2. 選取欲綁定的 WiFi 名稱並輸入密碼\n3. 稍待10秒，若於 "設定" > "網際網路" 成功顯示無線網路 IP，即代表綁定成功',
                please_see_tutorial_video: '觀看教學影片',
                tutorial_url: 'https://tw.flux3dp.com/beambox-tutorial/'
            },

            set_machine_generic: {
                printer_name: '機器名稱*',
                printer_name_placeholder: '例如：霹靂五號',
                old_password: '舊密碼',
                password: '機器密碼',
                set_station_mode: '設定成無線基地台',
                password_placeholder: '使用密碼保護你的機器',
                incorrect_old_password: '舊密碼錯誤',
                incorrect_password: '密碼錯誤',
                ap_mode_name: '網路名稱',
                ap_mode_pass: '密碼',
                ap_mode_name_format: '只接受英文及數字',
                ap_mode_pass_format: '請至少輸入 8 個字',
                ap_mode_name_placeholder: '最多 32 個字',
                ap_mode_pass_placeholder: '至少 8 個字',
                create_network: '建立網路',
                join_network: '加入網路',
                security: '安全層級'
            },

            setting_completed: {
                start: '開始使用',
                is_ready: '“%s” 準備完成',
                station_ready_statement: '你的機器已成為 Wi-Fi 熱點，你可以藉由無線連接 “%s” 這個熱點操作 FLUX',
                brilliant: '太棒了!',
                begin_journey: '你可以拔除 USB / Micro USB 傳輸線, 開始使用機器隨心所欲地進行創作囉！',
                great: '歡迎使用 FLUX Studio',
                upload_via_usb: '你可以稍後再設定 Wi-Fi 選項。<br/>如果你沒有 Wi-Fi 環境，請參考<a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/215998327-Connection-Guide-for-Desktop-PCs">PC連線指南</a>',
                back: '回到 Wi-Fi 設定',
                ok: '開始使用'
            },

            notice_from_device: {
                headline: '檢查 WiFi 指示燈',
                subtitle: '機器上的綠燈表示了機器的連線狀態',
                light_on: 'Light On: 綠燈恆亮',
                light_on_desc: '機器已經連上了指定網路',
                breathing: 'Breathing: 呼吸燈',
                breathing_desc: '無線網路設定失敗，請嘗試重新設定',
                successfully: '如果機器連線成功',
                successfully_statement: '請將無線網路連線至(%s)，並且重新啟動 FLUX Studio',
                restart: '重啟 FLUX Studio'
            },

            // errors
            errors: {
                error: '錯誤',
                close: '關閉',
                not_found: '無法找到機器',
                not_support: '請透過隨身碟更新 Delta 韌體到 v1.6 以上',

                keep_connect: {
                    caption: '無法透過 USB 連接',
                    content: '別擔心！請確認\n1. WiFi 指示燈（綠燈）呼吸、閃爍或恆亮\n2. 裝置管理員有 FLUX Link Cable，可查看 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/215327328">說明</a>\n3. 重新插拔線並稍等 10 秒鐘'
                },

                wifi_connection: {
                    caption: '無法與此 Wi-Fi 連線',
                    connecting_fail: '請確認信號強度以及密碼正確'
                },

                select_wifi: {
                    ap_mode_fail: '基地台模式連線設定失敗'
                }
            }
        },
        wifi: {
            home: {
                line1: '請問你所處的環境擁有可以連線的 Wi-Fi 嗎?',
                line2: '我們將協助你將 FLUX 連線至你家中的 Wi-Fi',
                select: '是的，開始連線'
            },
            set_password: {
                line1: '請輸入「',
                line2: '」無線網路的連線密碼',
                password_placeholder: '請輸入 Wi-Fi 密碼',
                back: '上一步',
                join: '加入',
                connecting: '連線中'
            },
            success: {
                caption: '太棒了，連線成功!',
                line1: '接下來，我們將為你的機器做一些簡單的設定。',
                next: '下一步'
            },
            failure: {
                caption: '連線失敗',
                line1: '請確認你的 Wi-Fi 是否正常運作後，再重新連線',
                next: '重新連線'
            },
            set_printer: {
                caption: '為你的 FLUX3D Printer 設定名稱與密碼',
                printer_name: '名稱',
                printer_name_placeholder: '設定名稱',
                password: '密碼',
                password_placeholder: '設定密碼',
                notice: '設定密碼，可以確保你的 FLUX 只有知道密碼的人可以操作',
                next: '下一步'
            }
        },
        menu: {
            print: '列印',
            laser: '雷雕',
            scan: '掃描',
            usb: 'USB',
            device: '機器',
            setting: '設定',
            draw: '繪圖',
            cut: '切割',
            beambox: 'BEAMBOX',
            mill: 'MILL'
        },
        settings: {
            on: '開',
            off: '關',
            caption: '設定',
            tabs: {
                general: '一般',
                device: '機器'
            },
            ip: '機器 IP 位址',
            wrong_ip_format: 'IP格式錯誤',
            projection: '視角投影',
            projection_perspective: '透視投影',
            projection_orthographic: '正投影',
            antialiasing: '反鋸齒',
            auto_slice: '自動切片',
            lock_selection: '鎖定選取目標',
            reset: '重置所有設定',
            default_machine: '預設機器',
            default_machine_button: '無',
            remove_default_machine_button: '刪除',
            confirm_remove_default: '將會刪除預設機器',
            reset_now: '重置所有設定',
            confirm_reset: '確認要重置 FLUX Studio?',
            language: '語言',
            notifications: '通知',
            default_app: '預設功能',
            delta_series: 'Delta 系列',
            beambox_series: 'Beambox 系列',
            default_model: '預設型號（列印參數）',
            default_beambox_model: '預設型號',
            fd1: 'FLUX Delta',
            fd1p: 'FLUX Delta+',
            none: '無',
            close: '關閉',
            printer: {
                new_printer: '新增成型機',
                name: '成型機名稱',
                current_password: '目前密碼',
                set_password: '設定密碼',
                security_notice: '你可以用密碼保護你的成型機',
                connected_wi_fi: 'Wi-Fi 連線',
                advanced: '進階',
                join_other_network: '加入其它網路',
                your_password: '新密碼',
                confirm_password: '確認密碼',
                save_password: '儲存變更'
            },
            cancel: '取消',
            done: '完成',
            connect_printer: {
                title: '選擇連接成型機'
            },
            notification_on: '開啟',
            notification_off: '關閉',
            engine_change_fail: {
                'caption': '無法變更切片引擎',
                '1': '檢查時發生錯誤',
                '2': 'cura 版本錯誤',
                '3': '路徑不是 Cura',
                '4': 'path is not a exist file, please check engine path in setting section'
            },
            allow_tracking: '您是否願意自動傳送匿名用量資料，協助 FLUX 改進產品和服務？',
            flux_cloud: {
                processing: '處理中...',
                flux_cloud: 'FLUX CLOUD',
                back: '返回',
                next: '下一步',
                done: '結束',
                sign_in: '登入',
                sign_up: '註冊',
                success: '成功',
                fail: '失敗',
                cancel: '取消',
                try_again: '再試一次',
                bind: '綁定',
                bind_another: '綁定另一部機器',
                username: '使用者名稱',
                nickname: '使用者別名',
                email: '電子信箱',
                password: '密碼',
                re_enter_password: '重新輸入密碼',
                forgot_password: '忘記密碼?',
                sign_up_statement: '如果尚未持有FLUX ID，可以<a href="%s">按此註冊</a>',
                try_sign_up_again: '請重新<a href="%s">註冊</a>',
                agreement: '同意 FLUX-Cloud <a href="#/studio/cloud/privacy">隱私權政策</a>, <a href="#/studio/cloud/terms">使用條款</a>',
                pleaseSignIn: '請使用 FLUX ID 登入',
                enter_email: '請輸入您的電子信箱',
                check_inbox: '請至您的電子信箱確認!',
                error_blank_username: '請輸入使用者別名',
                error_blank_email: '請輸入電子信箱',
                error_email_format: '請輸入正確的電子信箱',
                error_email_used: '此電子信箱已被使用',
                error_password_not_match: '確認密碼與密碼不相同',
                select_to_bind: '請選擇欲綁定的機器',
                binding_success: '綁定成功!',
                binding_success_description: '您可以開始使用 FLUX App 來監控機器',
                binding_fail: '綁定失敗',
                binding_fail_description: '網路可能有問題，請再試一次',
                binding_error_description: '無法開啟雲端功能，請與客服人員聯絡，並附上機器錯誤記錄',
                retrieve_error_log: '下載錯誤記錄',
                binding: '綁定中...',
                check_email: '相關信進已寄出到您的電子信箱，請確認',
                email_exists: '電子信箱已被使用',
                not_verified: '請於您的電子信箱開啟確認信件',
                user_not_found: '登入訊息錯誤',
                resend_verification: '重新寄送確認信件',
                contact_us: '請與 FLUX 客服聯絡',
                confirm_reset_password: '需要重新設定密碼嗎？',
                format_error: '登入失敗，請重新登入',
                agree_to_terms: '請同意使用者條款',
                back_to_list: '回機器列表',
                change_password: '密碼變更',
                current_password: '目前登入密碼',
                new_password: '新密碼',
                confirm_password: '確認新密碼',
                empty_password_warning: '密碼不可為空白',
                WRONG_OLD_PASSWORD: '舊密碼錯誤',
                FORMAT_ERROR: '密碼格式錯誤',
                submit: '儲存',
                sign_out: '登出',
                not_supported_firmware: '支援 FLUX cloud 需要機器韌體 v1.5＋',
                unbind_device: '確認要不再綁定此機器?',
                CLOUD_UNKNOWN_ERROR: '機器無法連接到雲端伺服器. 請重新啟動機器. (General)',
                CLOUD_SESSION_CONNECTION_ERROR: '機器無法連接到雲端伺服器. 請重新啟動機器. (Session)',
                SERVER_INTERNAL_ERROR: '伺服器發生錯誤，請稍後再試.',
            }
        },
        print: {
            import: '匯入',
            save: '儲存⋯',
            gram: '克',
            support_view: '支援預覽',
            start_print: '列印',
            advanced: {
                general: '一般',
                layers: '切層',
                infill: '填充',
                support: '支撐',
                speed: '速度',
                custom: '文字',
                slicingEngine: '切片引擎',
                slic3r: 'Slic3r',
                cura: 'Cura',
                cura2: 'Cura2',
                filament: '線料',
                temperature: '溫度與材料',
                detect_filament_runout: '偵測線料',
                flux_calibration: '自動校正',
                detect_head_tilt: '偵測工具頭傾斜',
                layer_height_title: '層高',
                layer_height: '一般層高',
                firstLayerHeight: '底層層高',
                shell: '物件外殼',
                shellSurface: '物件外殼圈數',
                solidLayerTop: '頂部實心層數',
                solidLayerBottom: '底部實心層數',
                density: '填充密度',
                pattern: '填充圖樣',
                auto: 'auto',                       // do not change
                line: '線狀',                       // do not change
                rectilinear: '直線',         // do not change
                rectilinearGrid: '直線格狀',// do not change
                honeycomb: '蜂巢狀',             // do not change
                offset: '位移',
                xyOffset: '水平擴張',
                zOffset: 'Z 軸位移',
                cutBottom: '移除底部',

                curaInfill: {
                    automatic: '自動',
                    grid: '格狀',
                    lines: '線狀',
                    concentric: '同心',
                    concentric_3d: '立體同心',
                    cubic: '立方',
                    cubicsubdiv: '立方細分',
                    tetrahedral: '四面體',
                    triangles: '三角形',
                    zigzag: '鋸齒'
                },
                curaSupport: {
                    lines: '線狀',
                    grid: '格狀',
                    zigzag: '鋸齒'
                },
                blackMagic: '黑魔法',
                spiral: '螺旋',
                generalSupport: '支撐',
                spacing: '線段間隔',
                overhang: '懸空角度',
                zDistance: 'Z軸間隔',
                raft: '底座',
                raftLayers: '底座層數',
                brim: '底部延伸圈數 (Brim)',
                skirts: '邊界預覽 (Skirt)',
                movement: '移動速度',
                structure: '結構速度',
                traveling: '移動',
                surface: '表面速度',
                firstLayer: '底層',
                solidLayers: '實心層',
                innerShell: '外殼內圈',
                outerShell: '外殼外圈',
                bridge: '架橋',
                config: '設定',
                presets: '預設',
                name: '名稱',
                apply: '套用',
                save: '儲存',
                saveAsPreset: '儲存參數',
                cancel: '取消',
                delete: '刪除',
                loadPreset: '載入參數',
                savePreset: '儲存參數',
                reloadPreset: '重置參數',
                printing: '列印溫度',
                firstLayerTemperature: '首層溫度',
                flexibleMaterial: '軟性材料'
            },
            mode: [
                {
                    value: 'beginner',
                    label: '入門',
                    checked: true
                },
                {
                    value: 'expert',
                    label: '專家'
                }
            ],
            params: {
                beginner: {
                    print_speed: {
                        text: '列印速度',
                        options: [
                            {
                                value: 'slow',
                                label: '中'
                            },
                            {
                                value: 'fast',
                                label: '快',
                                selected: true
                            }
                        ]
                    },
                    material: {
                        text: '材質',
                        options: [
                            {
                                value: 'pla',
                                label: 'PLA',
                                selected: true
                            }
                        ]
                    },
                    support: {
                        text: '支撐',
                        on: '支撐',
                        off: '關閉',
                        options: [
                            {
                                value: 'everywhere',
                                label: 'Everywhere',
                                checked: true
                            },
                            {
                                value: 'nowhere',
                                label: 'nowhere'
                            }
                        ]
                    },
                    platform: {
                        text: '平台',
                        options: [
                            {
                                value: 'raft',
                                label: '墊片',
                                selected: true
                            }
                        ]
                    }
                },
                expert: {
                    layer_height: {
                        text: '每層高度',
                        value: 0.3,
                        unit: 'mm'
                    },
                    print_speed: {
                        text: '列印速度',
                        value: 50,
                        unit: 'mm/s'
                    },
                    temperature: {
                        text: 'Temperature',
                        value: 231,
                        unit: '°C'
                    },
                    support: {
                        text: 'Support',
                        options: [
                            {
                                value: 'everywhere',
                                label: 'Everywhere',
                                checked: true
                            },
                            {
                                value: 'nowhere',
                                label: 'nowhere'
                            }
                        ]
                    },
                    platform: {
                        text: 'Platform',
                        options: [
                            {
                                value: 'raft',
                                label: 'Raft',
                                checked: true
                            }
                        ]
                    }
                }
            },
            left_panel: {
                raft_on: '底座 ON',
                raft_off: '底座 OFF',
                support_on: '支撐 ON',
                support_off: '支撐 OFF',
                advanced: '更多選項',
                preview: '預覽路徑',
                plaTitle: 'PICK THE COLOR OF THE FILAMENT',
                transparent: 'TRANSPARENT',
                raftTitle: 'A Raft are layers built under your part and help it stick to the base plate',
                supportTitle: 'A Support is a generated structure to support overhanging part of your object, to prevent filament dropping',
                advancedTitle: 'Detail 3d printing parameters, you may acheive better result than default by adjusting them',
                confirmExitFcodeMode: '離開預覽模式將會移除Fcode，是否繼續？'
            },
            right_panel: {
                get: 'Get',
                go: 'Go',
                preview: '預覽'
            },
            quality: {
                high: '品質 精細',
                med: '品質 中等',
                low: '品質 快速',
                custom: '品質 自訂'
            },
            model: {
                fd1: 'Delta',
                fd1p: 'Delta+'
            },
            scale: '尺寸',
            rotate: '旋轉',
            delete: '刪除',
            reset: '重設',
            cancel: '取消',
            done: '確認',
            pause: '暫停',
            restart: '重新開始',
            download_prompt: '請輸入檔案名稱',
            importTitle: '匯入 3D 模型 ( .stl )',
            getFcodeTitle: '儲存FLUX列印工作',
            goTitle: '準備列印',
            deviceTitle: '顯示監控介面',
            rendering: '切片中',
            reRendering: '重新切片中',
            finishingUp: '完成中',
            savingFilePreview: '產生預覽圖',
            uploading: '讀取中',
            uploaded: '已上傳，分析模型中',
            importingModel: '匯入模型',
            wait: '請稍候',
            out_of_range: '超過列印範圍',
            out_of_range_message: '請縮小物件尺寸',
            drawingPreview: '繪製預覽路徑，請稍候',
            gettingSlicingReport: '正在取得最新切片狀態'
        },
        draw: {
            pen_up: '移動高度',
            pen_down: '繪製高度',
            speed: '速度',
            pen_up_title: '筆不會碰到繪製表面的 Z 軸距離',
            pen_down_title: '筆會碰到繪製表面的 Z 軸距離, 必須比移動高度低',
            speed_title: '握架工具頭移動的速度',
            units: {
                mms: 'mm/s',
                mm: 'mm'
            }
        },
        cut: {
            horizontal_calibrate: '水平\n校正',
            height_calibrate: '高度\n校正',
            running_horizontal_adjustment: '水平校正中',
            running_height_adjustment: '高度校正中',
            run_height_adjustment: '請調整刀具，並執行高度校正。',
            horizontal_adjustment_completed: '水平校正完成',
            height_adjustment_completed: '高度校正完成',
            you_can_now_cut: '恭喜您！您可以開始進行切割工作',
            zOffset: '高度調整',
            overcut: '閉環過切',
            speed: '速度',
            bladeRadius: '刀尖半徑',
            backlash: 'Backlash 補償',
            zOffsetTip: '刀頭模組底部距離切割平面的高度調整',
            overcutTip: '當切割路徑起始點與結束點座標相同時，切到結束點後再走一些從起始點開始的路徑',
            speedTip: '切割速度',
            backlashTip: '如果使用第三方刀具直線不夠直，則調整此參數',
            units: {
                mms: 'mm/s',
                mm: 'mm'
            }
        },
        laser: {
            import: '匯入',
            save: '儲存⋯',
            custom: '自訂',
            presets: '預設',
            button_advanced: '進階',
            confirm: '確認',
            get_fcode: '儲存<br/>工作',
            export_fcode: '儲存成工作檔案 ...',
            name: '名稱',
            go: 'GO',
            showOutline: '顯示<br/>輪廓',
            do_calibrate: '看起來您似乎第一次使用雷射雕刻功能，可以透過包裝裡附的牛皮卡找到最佳的焦距，是否要載入焦距校正圖片？（稍後亦可以於進階面板中載入）',
            process_caption: '輸出中',
            laser_accepted_images: '雕刻支援格式：BMP/GIF/JPG/PNG/SVG',
            draw_accepted_images: '繪製支援格式：SVG',
            svg_fail_messages: {
                'TEXT_TAG': '不支援標籤 &lt;text&gt;',
                'DEFS_TAG': '不支援標籤 &lt;defs&gt;',
                'CLIP_TAG': '不支援標籤 &lt;clip&gt;',
                'FILTER_TAG': '不支援標籤 &lt;filter&gt;',
                'EMPTY': '內容為空',
                'FAIL_PARSING': '解析錯誤',
                'SVG_BROKEN': '檔案損壞',
                'NOT_SUPPORT': '非 SVG 格式'
            },
            title: {
                material: '選擇正確的材質來雕刻出最好的結果',
                object_height: '物體高度，從底盤到物件最高點之距離',
                height_offset: '雷射高度調整，包含磁吸底版跟焦距誤差，可根據焦距校正圖片調整數字',
                shading: '使用雷射漸層效果，會增加雕刻時間',
                advanced: '自行調整功率大小以及速度'
            },
            print_params: {
                object_height: {
                    text: '物體高度',
                    unit: 'mm'
                },
                height_offset: {
                    text: '焦距調整',
                    unit: 'mm'
                },
                shading: {
                    text: '漸層',
                    textOn: 'ON',
                    textOff: 'OFF',
                    checked: true
                }
            },
            object_params: {
                position: {
                    text: '位置'
                },
                size: {
                    text: '尺寸',
                    unit: {
                        width: '寬',
                        height: '高'
                    }
                },
                rotate: {
                    text: '旋轉'
                },
                threshold: {
                    text: '圖片曝光',
                    default: 128
                }
            },
            advanced: {
                label: '進階選項',
                form: {
                    object_options: {
                        text: '材質',
                        label: '材質選項',
                        options: [
                            {
                                value: 'cardboard',
                                label: '牛皮紙',
                                data: {
                                    laser_speed: 10,
                                    power: 255
                                }
                            },
                            {
                                value: 'wood',
                                label: '木板',
                                data: {
                                    laser_speed: 3,
                                    power: 255
                                }
                            },
                            {
                                value: 'steel',
                                label: '皮革',
                                data: {
                                    laser_speed: 5,
                                    power: 255
                                }
                            },
                            {
                                value: 'paper',
                                label: '紙',
                                data: {
                                    laser_speed: 2,
                                    power: 255
                                }
                            },
                            {
                                value: 'cork',
                                label: '軟木',
                                data: {
                                    laser_speed: 5,
                                    power: 255
                                }
                            },
                            {
                                value: 'other',
                                label: '其它',
                                data: {}
                            }
                        ]
                    },
                    laser_speed: {
                        text: '雷射速度',
                        unit: 'mm/s',
                        fast: '快',
                        slow: '慢',
                        min: 0.8,
                        max: 20,
                        step: 0.1
                    },
                    power: {
                        text: '雷射強度',
                        high: '強',
                        low: '弱',
                        min: 0,
                        max: 255,
                        step: 1
                    }
                },
                save_and_apply: '儲存並套用',
                save_as_preset: '儲存',
                save_as_preset_title: '儲存預設',
                load_preset_title: '載入',
                background: '自訂背景',
                removeBackground: '移除背景',
                removePreset: '設定值將會移除',
                load_calibrate_image: '載入校正圖片',
                apply: '套用',
                cancel: '取消',
                save: '儲存'
            }
        },
        scan: {
            stop_scan: '取消',
            over_quota: '超過可容納點雲',
            convert_to_stl: '轉換成 STL',
            scan_again: '再次掃描',
            start_multiscan: '多次掃描',
            processing: '處理中...',
            remaining_time: '剩餘時間',
            do_save: '儲存 STL',
            go: '開始',
            rollback: '返回',
            error: '錯誤',
            confirm: '確認',
            caution: '警告',
            cancel: '取消',
            delete_mesh: '真的要刪除嗎?',
            quality: '品質',
            scan_again_confirm: '是否確定要放棄目前的掃瞄結果？',
            calibrate: '校正',
            calibration_done: {
                caption: '校正完成',
                message: '你可以開始掃描了'
            },
            cant_undo: '無法復原',
            estimating: '估計中...',
            calibrate_fail: '校正失敗',
            calibration_is_running: '掃描校正中',
            calibration_firmware_requirement: '請更新至韌體以使用此功能 (1.6.25+)',
            resolution: [{
                id: 'best',
                text: '最佳',
                time: '~30分鐘',
                value: 1200
            },
            {
                id: 'high',
                text: '精細',
                time: '~20分鐘',
                value: 800
            },
            {
                id: 'normal',
                text: '中等',
                time: '~10分鐘',
                value: 400
            },
            {
                id: 'low',
                text: '快速',
                time: '~5分鐘',
                value: 200
            },
            {
                id: 'draft',
                text: '草稿',
                time: '~2分鐘',
                value: 100
            }],
            save_mode: [
                {
                    value: 'stl',
                    label: 'STL',
                    checked: true
                },
                {
                    value: 'pcd',
                    label: 'PCD'
                },
            ],
            manipulation: {
                filter: '操作',
                position: '位置',
                size: '尺寸',
                rotate: '旋轉',
                crop: '剪裁',
                manual_merge: '手動合併',
                clear_noise: '去除噪點',
                save_pointcloud: '輸出點雲'
            },
            size: {
                x: 'X',
                y: 'Y',
                z: 'Z'
            },
            rotate: {
                x: 'X',
                y: 'Y',
                z: 'Z'
            },
            translate: {
                x: 'X',
                y: 'Y',
                z: 'Z'
            },
            messages: {
                'not open': {
                    caption: '未偵測到鏡頭畫面 / 畫面太暗',
                    message: '壓下，然後拉出掃描鏡頭，直至最底端發出固定聲為止。'
                },
                'no object': {
                    caption: '未偵測到校正工具',
                    message: '請將掃描校正工具插在中心溝槽處，確保光源充足。'
                },
                'no laser': {
                    caption: '未偵測到掃描雷射',
                    message: '請壓下，並彈出掃描雷射頭，確保光源不要過亮。'
                }
            }
        },
        beambox: {
            popup: {
                select_favor_input_device: '為了提供更好的使用者體驗<br/>請選擇你喜愛的輸入裝置',
                select_import_method: '選擇分層方式:',
                touchpad: '觸控板',
                mouse: '滑鼠',
                layer_by_layer: '依圖層分層',
                layer_by_color: '依顏色分層',
                nolayer: '不分層',
                should_update_firmware_to_continue: '請先更新 Beambox 的韌體以繼續。 (主選單 > 機器 > [ Your Beambox ] > 韌體更新)'
            },
            left_panel: {
                insert_object: '插入物件',
                preview: '相機預覽',
                suggest_calibrate_camera_first: '提醒您：\n第一次使用相機，請先進行相機校正。並在每次使用時將平台對焦，以取得最好的效果。',
                end_preview: '結束預覽模式',
                unpreviewable_area: '非相機預覽範圍',
                rectangle: '長方形',
                ellipse: '橢圓形',
                line: '線段',
                image: '圖片',
                text: '文字',
                insert_object_submenu: {
                    rectangle: '矩形',
                    ellipse: '橢圓形',
                    line: '線段',
                    image: '圖片',
                    text: '文字'
                }
            },
            right_panel: {
                layer_panel: {
                    layer1: '預設圖層',
                    layer_bitmap: '點陣圖層'
                },
                laser_panel: {
                    strength: '功率',
                    speed: '速度',
                    cut: '切割',
                    engrave: '雕刻'
                },
            },
            object_panels: {
                position: '位置',
                rotation: '旋轉',
                size: '大小',
                width: '寬',
                height: '長',
                center: '圓心',
                ellipse_radius: '大小',
                points: '端點',
                laser_config: '雷射設定',
                shading: '漸層',
                threshold: '曝光閾值',
                lock_desc: '縮放時固定比例 (SHIFT)'
            },
            svg_editor: {
                unnsupported_file_type: 'FLUX Studio 不直接支援此檔案格式。請先輸出成圖片檔或 SVG 格式',
                unnsupport_ai_file_directly: '請先將您的 AI 檔輸出成 SVG 或 圖片檔，再匯入至 FLUX Studio'
            },
            units: {
                walt: 'W',
                mm: 'mm'
            }
        },
        select_printer: {
            choose_printer: '請選擇要設定的機器',
            notification: '"%s" 需要密碼',
            submit: '送出',
            please_enter_password: '"密碼',
            auth_failure: '認證失敗',
            retry: '重新選擇',
            unable_to_connect: '#008 無法與機器建立穩定連線'
        },
        device: {
            pause: '暫停',
            paused: '已暫停',
            pausing: '正在暫停',
            selectPrinter: '選擇成型機',
            retry: '重試',
            status: '狀態',
            busy: '忙碌中',
            ready: '待命中',
            reset: '重設(kick)',
            abort: '取消工作',
            start: '開始',
            please_wait: '請稍待...',
            quit: '中斷連結',
            heating: '加熱中',
            completing: '完成中',
            aborted: '已終止',
            completed: '已完成',
            calibrating: '校正中',
            showOutline: '繪製輪廓中',
            aborting: '取消工作中',
            starting: '啟動中',
            resuming: '恢復中',
            scanning: '掃描',
            occupied: '機器被佔用',
            running: '工作中',
            uploading: '上傳中',
            processing: '處理中',
            disconnectedError: {
                caption: '機器連線中斷',
                message: '請確認 %s 的網路連線是否正常'
            },
            noTask: '目前無任何工作',
            pleaseWait: '請稍待...',
            finishing: '完成中',
            initiating: '啟動中',
            unknown: '未知狀態',
            pausedFromError: '發生錯誤暫停',
            model_name: '型號',
            IP: 'IP',
            serial_number: '序號',
            firmware_version: '韌體版本',
            UUID: 'UUID',
            select: '選擇',
            deviceList: '機器列表',
            calibration: {
                title: '自動校正',
                A: '水平與高度',
                H: '高度',
                N: '關閉',
                byFile: '根據 FCODE 設定'
            },
            detectFilament: {
                title: '偵測線料',
                on: '開啟',
                off: '關閉',
                byFile: '根據 FCODE 設定'
            },
            filterHeadError: {
                title: '工具頭錯誤偵測',
                shake: '過度搖晃',
                tilt: '傾斜',
                fan_failure: '風扇故障',
                laser_down: '雷射安全鎖',
                byFile: '根據 FCODE 設定',
                no: '關閉'
            },
            autoresume: {
                title: '智慧工作恢復',
                on: '開啟',
                off: '關閉'
            },
            broadcast: {
                title: 'UPNP 廣播',
                L: '預設',
                A: '密集',
                N: '關閉'
            },
            enableCloud: {
                title: '雲端操作',
                A: '開啟',
                N: '關閉'
            },
            backlash: '路徑幾何誤差補正',
            turn_on_head_temperature: '開啟噴頭溫度',
            plus_camera: '升級包鏡頭',
            plus_extrusion: '升級包擠出馬達',
            movement_test: '列印前運動測試',
            machine_radius: 'Delta機構半徑',
            postback_url: '狀態回傳URL',
            disable: '關閉',
            enable: '開啟',
            beambox_should_use_touch_panel_to_adjust: '請至 Beambox 觸控面板調整設定。'
        },
        monitor: {
            change_filament                     : 'CHANGE FILLAMENT',
            browse_file                         : 'BROWSE FILE',
            monitor                             : 'MONITOR',
            currentTemperature                  : 'Current Temp',
            nothingToPrint                      : 'There is nothing to print',
            go                                  : '開始',
            start                               : '開始',
            pause                               : '暫停',
            stop                                : '停止',
            record                              : 'RECORD',
            camera                              : '相機',
            connecting                          : '連線中，請稍候',
            HEAD_OFFLINE                        : '#110 沒有偵測到工具頭\n請確認工具頭傳輸線完整插入 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218183157">暸解更多</a>',
            HEAD_ERROR_CALIBRATING              : '#112 工具頭校正失誤\n請重新裝載工具頭，並確認磁鐵關節的附著',
            HEAD_ERROR_FAN_FAILURE              : '#113 風扇無法轉動\n請嘗試用細針戳一下 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/217732178">暸解更多</a>',
            HEAD_ERROR_HEAD_OFFLINE             : '#110 沒有偵測到工具頭\n請確認工具頭傳輸線完整插入 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218183157">暸解更多</a>',
            HEAD_ERROR_TYPE_ERROR               : '#111 偵測到錯誤工具頭\n請安裝正確的對應工具頭',
            HEAD_ERROR_INTLK_TRIG               : '#116 偵測到雕刻工具頭傾斜\n請確認金屬棒正確連結，雕刻頭與握架緊密結合以繼續<a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/217085937">瞭解更多</a>',
            HEAD_ERROR_RESET                    : '#114 工具頭傳輸線接觸不良\n請確認工具頭傳輸線完整插入以繼續，如持續發生此問題，請聯繫 FLUX 客服 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218183167">暸解更多</a>',
            HEAD_ERROR_TILT                     : '#162 偵測到工具頭傾斜\n請確認球型關節正確附著以繼續',
            HEAD_ERROR_SHAKE                    : '#162 偵測到工具頭傾斜\n請確認球型關節正確附著以繼續',
            HEAD_ERROR_HARDWARE_FAILURE         : '#164 工具頭溫度異常\n請聯繫 FLUX 客服<a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218415378">暸解更多</a>',
            'HEAD_ERROR_?'                      : '#199 Toolhead error\nCheck if the toolhead is abnormal',
            HARDWARE_ERROR_FILAMENT_RUNOUT      : '#121 沒有偵測到線料\n請重新插入新的線料 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218931757">瞭解更多</a>',
            HARDWARE_ERROR_0                    : '#121 沒有偵測到線料\n請重新插入新的線料 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218931757">瞭解更多</a>',
            HARDWARE_ERROR_PLATE_MISSING        : '#122 沒有偵測到工作平台\n請放上工作平台金屬板',
            HARDWARE_ERROR_ZPROBE_ERROR         : '#123 水平校正失敗\n請移除可能影響校正的物體（噴嘴殘料、工作平台上雜質）<a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218931767">暸解更多</a>',
            HARDWARE_ERROR_CONVERGENCE_FAILED   : '#123 水平校正失敗\n請移除可能影響校正的物體（噴嘴殘料、工作平台上雜質）<a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218931767">暸解更多</a>',
            HARDWARE_ERROR_HOME_FAILED          : '#124 原點校正失敗\n請排除軌道上異物，確定傳輸線不會被夾到 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218931807">暸解更多</a>',
            HARDWARE_ERROR_MAINBOARD_ERROR      : '#401 主板沒有回應。請聯繫 FLUX 客服。',
            HARDWARE_ERROR_SUBSYSTEM_ERROR      : '#402 子系統沒有回應。請聯繫 FLUX 客服。',
            HARDWARE_ERROR_SENSOR_ERROR         : '溫度偵測器發生問題。請聯繫 FLUX 客服。',
            HARDWARE_ERROR_SENSOR_ERROR_FSR     : '壓力感測晶片讀數錯誤',
            HARDWARE_ERROR_PUMP_ERROR           : '#900 水冷未開，請聯繫客服 (02) 2651-3171',
            HARDWARE_ERROR_DOOR_OPENED          : '#901 門蓋開啟，將門蓋關上以繼續',
            HARDWARE_ERROR_OVER_TEMPERATURE     : '#902 水溫過高，請稍後再繼續',
            WRONG_HEAD                          : '請更換成列印工具頭',
            USER_OPERATION                      : '別的使用者正在佔用機器',
            RESOURCE_BUSY                       : '機器忙碌中\n如果機器沒有在進行動作， 請重新啟動機器',
            DEVICE_ERROR                        : '機器錯誤\n請重新啟動機器',
            NO_RESPONSE                         : '機器錯誤\n請重新啟動機器',
            SUBSYSTEM_ERROR                     : '#402 子系統沒有回應。請聯繫 FLUX 客服。',
            HARDWARE_FAILURE                    : '機器錯誤\n請重新啟動機器',
            MAINBOARD_OFFLINE                   : '機器錯誤\n請重新啟動機器',
            G28_FAILED                          : '#124 原點校正失敗\n請排除軌道上異物，並重新插拔工具頭連接線 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218931807">暸解更多</a>',
            FILAMENT_RUNOUT_0                   : '#121 沒有偵測到線料\n請重新插入新的線料 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218931757">瞭解更多</a>',
            USER_OPERATION_FROM_CODE            : '使用操作暫停（更換線料）',
            processing                          : '處理中',
            savingPreview                       : '正在產生預覽圖',
            hour                                : '小時',
            minute                              : '分',
            second                              : '秒',
            left                                : '完成',
            temperature                         : '溫度',
            forceStop                           : '是否強制停止現在工作?',
            upload                              : '上傳',
            download                            : '下載',
            fileNotDownloadable                 : '下載不支援此檔案格式',
            cannotPreview                       : '無法預覽此檔案',
            extensionNotSupported               : '上傳檔案不支援此檔案格式',
            fileExistContinue                   : '檔案已存在，是否要覆蓋？',
            confirmGToF                         : 'GCode 上傳後會自動轉檔成 FCode，是否繼續？',
            updatePrintPresetSetting            : 'FLUX STUDIO 有新的預設列印參數。\n是否要更新？（會刪除目前參數）',
            confirmFileDelete                   : '是否確定要刪除這個檔案？',
            task: {
                EXTRUDER                        : '列印',
                PRINT                           : '列印',
                LASER                           : '雷射雕刻',
                DRAW                            : '數位繪圖',
                CUT                             : '貼紙切割',
                VINYL                           : '貼紙切割',
                BEAMBOX                         : '雷射雕刻',
                'N/A'                           : '自由模式'
            },
            device: {
                EXTRUDER                        : '列印工具頭',
                LASER                           : '雕刻工具頭',
                DRAW                            : '繪製工具頭'
            },
            cant_get_toolhead_version           : '無法取得最新版本資訊'
        },
        alert: {
            caption: '錯誤',
            duplicated_preset_name: '重複的預設名稱',
            info: '訊息',
            warning: '警告',
            error: '錯誤',
            retry: '重試',
            abort: '放棄',
            cancel: '取消',
            close: '關閉',
            ok: '確定',
            yes: ' 是',
            no: '否',
            stop: '停止'
        },
        caption: {
            connectionTimeout: '連線逾時'
        },
        message: {
            connecting: '連線中...',
            connectingMachine: '連接 %s 中...',
            connected: '已連線',
            authenticating: '密碼驗證中...',
            runningTests: '運動測試中...',
            machineNotConnected: 'Machine is not connected',
            notPrinting: 'Printing is not in progress',
            nothingToPrint: 'Nothing to print (source blob missing)',
            connectionTimeout: '請確認你的網路狀態和機器的 Wi-Fi 指示燈是否為恆亮',
            device_not_found: {
                caption: '找不到預設機器',
                message: '請確認預設機器的 Wi-Fi 指示燈，或取消設定預設機器'
            },
            device_busy: {
                caption: '機器忙碌中',
                message: '機器正在進行另外一項工作，請稍候再試。如果機器持續沒有回應，請將機器重新啟動。'
            },
            device_is_used: '機器正被使用中，是否要終止現在任務？',
            device_in_use: '機器正被使用中，請停止或暫停目前的任務',
            invalidFile: '檔案不是正確的 STL 格式',
            failGeneratingPreview: '無法儲存預覽圖',
            slicingFailed: 'Slic3r 切片錯誤',
            no_password: {
                content: '請用 USB 設定機器密碼，以提供此台電腦連線',
                caption: '未設定密碼'
            },
            image_is_too_small: '圖檔內容有誤',
            monitor_too_old: {
                caption: '韌體需要更新',
                content: '請按照<a target="_blank" href="http://helpcenter.flux3dp.com/hc/zh-tw/articles/216251077">此說明</a>安裝最新韌體版本'
            },
            cant_establish_connection: '無法正常啟動 FLUX Studio API，建議手動安裝 Visual C++ Redistributable 2015，如持續發生，請<a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/requests/new" target="_blank">聯繫 FLUX 客服</a>',
            application_occurs_error: '應用程式發生異常，請使用「功能表 > 說明 > 錯誤回報」',
            error_log: '錯誤訊息',
            fcodeForLaser: '檔案為雕刻工作',
            fcodeForPen: '檔案為繪圖工作',
            confirmFCodeImport: '載入.fc檔案將清除目前所有場景，是否繼續？',
            confirmSceneImport: '載入.fsc檔案將清除目前所有場景，是否繼續？',
            brokenFcode: '無法開啟 %s',
            slicingFatalError: '切片時發生錯誤，請上傳模型檔案給 FLUX 客服',
            unknown_error: '無法與機器建立連線，請使用「功能表 > 說明 > 錯誤回報」',
            unknown_device: '無法與機器建立連線，請確認 USB 有連接於機器',
            important_update: {
                caption: '重要更新',
                message: 'Delta 有重要韌體更新，是否要現在更新？',
            },
            unsupport_osx_version: '不支援此 Mac OS X 版本',
            need_password: '需要密碼與機器建立連線',
            new_app_downloading: 'FLUX Studio 下載中',
            new_app_download_canceled: 'FLUX Studio 下載已被取消',
            new_app_downloaded: '新版FLUX Studio 下載完畢',
            ask_for_upgrade: '馬上升級嗎?',
            need_1_1_7_above: '請更新 Delta 韌體到 v1.1.7 以上',
            gcode_area_too_big: '匯入的 gcode 檔案超過列印範圍',
            empty_file: '檔案內容不存在',
            usb_unplugged: 'USB 連線逾時，請確認與機器的連接',
            launghing_from_installer_warning: 'FLUX Studio 不是從應用程式資料夾開啟，可能會產生問題。請將 FLUX Studio 移到應用程式資料夾再使用。',
            uploading_fcode: '正在上傳 fcode',
            cant_connect_to_device: '無法連結機器，請確認機器是否開啟，以及與機器的連結方式',
            unable_to_find_machine: '無法連接到機器 ',
            unable_to_start: '無法開始工作，如果持續發生，請附上錯誤回報，與我們聯絡:\n'
        },
        machine_status: {
            '-10': '原生模式',
            '-2': '掃描中',
            '-1': '維護中',
            0: '待命中',
            1: '初始化',
            2: 'ST_TRANSFORM',
            4: '啟動中',
            6: '回復中',
            16: '工作中',
            18: '回復中',
            32: '已暫停',
            36: '已暫停',
            38: '暫停中',
            48: '已暫停',
            50: '暫停中',
            64: '已完成',
            66: '完成中',
            128: '已中斷',
            UNKNOWN: '-'
        },
        head_module: {
            EXTRUDER: '列印',
            LASER: '雷射',
            UNKNOWN: '',
            error: {
                'missing': '錯誤訊息不足',
                '0': '未知模組工具頭',
                '1': '偵測感應器無法連線',
                '2': 'No hello', // pi will send head_error_reset before this is issued
                '3': '#112 工具頭校正失誤\n請重新裝載工具頭，並確認磁鐵關節的附著',
                '4': '#162 偵測到工具頭傾斜\n請確認球型關節正確附著以繼續',
                '5': '#162 偵測到工具頭傾斜\n請確認球型關節正確附著以繼續',
                '6': '#119 列印工具頭無法控制溫度，請聯繫 FLUX 客服。',
                '7': '#113 風扇無法轉動\n請嘗試用細針戳一下 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/217732178">暸解更多</a>',
                '8': '#116 偵測到雕刻工具頭傾斜\n請確認金屬棒正確連結，雕刻頭與握架緊密結合以繼續<a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/217085937">瞭解更多</a>',
                '9': '#118 列印工具頭無法加溫，請聯繫 FLUX 客服。'
            }
        },
        change_filament: {
            home_caption: '更換線料',
            load_filament_caption: '進料',
            load_flexible_filament_caption: '進軟料',
            unload_filament_caption: '退料',
            cancel: '取消',
            load_filament: '進料',
            load_flexible_filament: '進軟料',
            unload_filament: '退料',
            next: '下一步',
            heating_nozzle: '列印工具頭加熱中',
            unloading: '自動退料中',
            loaded: '進料完成',
            unloaded: '退料完成',
            ok: '確定',
            kicked: '進料程序被中斷',
            auto_emerging: '請插入線料',
            loading_filament: '進料中',
            maintain_head_type_error: '列印工具頭未正確安裝',
            disconnected: '連線不穩，請確認機器連線狀況並稍後再試一次',
            maintain_zombie: '請重新啟動機器',
            toolhead_no_response: '#117 列印工具頭沒有回應 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/218347477">暸解更多</a>'
        },
        head_temperature: {
            title: '開啟噴頭溫度',
            done: '結束',
            target_temperature: '目標溫度',
            current_temperature: '目前溫度',
            set: '設定',
            incorrect_toolhead: '錯誤工具頭，請使用列印工具頭',
            attach_toolhead: '請插上列印工具頭'
        },
        camera_calibration: {
            camera_calibration: '相機校正',
            next: '下一步',
            cancel: '取消',
            back: '上一步',
            finish: '完成',
            please_place_paper: '請將乾淨 A4 白紙放在工作區域的左上角',
            please_refocus: '請將工作平台對焦',
            taking_picture: '擷取圖片中...',
            start_engrave: '開始繪製校正圖片',
            analyze_result_fail: '校正失敗<br/>請確認:<br/>1. 校正圖片完整畫在 A4 紙上<br/>2. 已將平台正確對焦',
            drawing_calibration_image: '繪製校正圖片中...',
            please_confirm_image: '<div><img class="img-center" src=%s /></div>請確認:<br/>1. 校正圖片完整畫在 A4 紙上<br/>2. 已將平台正確對焦',
            calibrate_done: '校正相機完成<br/>使用時請正確對焦以取得良好的預覽效果。'
        },
        input_machine_password: {
            require_password: '"%s" 需要密碼',
            connect: '連接',
            password: '密碼'
        },
        set_default: {
            success: '%s 已設為預設機器',
            error: '由於網路問題，無法將 %s 設為預設機器'
        },
        tutorial: {
            set_first_default_caption: '歡迎使用',
            set_first_default: '是否要將 %s 設為預設機器?',
            startWithFilament: '首先，讓我們先填裝線料',
            startWithModel: '接下來，讓我們載入範例3Ｄ模型',
            startTour: '嗨，歡迎<br/>這是你第一次使用列印功能,<br/>你希望觀看列印功能教學嗎？',
            clickToImport: '點擊匯入以載入 3D 模型',
            selectQuality: '選擇列印品質',
            clickGo: '按下開始以準備列印',
            startPrint: '確定平台上沒有格線，並於平台上塗上足厚口紅膠待其乾燥，即可開始列印',
            skip: '跳過教學',
            startPrintDeltaPlus: '確認將磁鐵列印版放上平台',
            runningMovementTests: '進行運動測試',
            connectingMachine: '連接機器中',
            movementTestFailed: { caption: '無法通過運動測試',  message: '1. 請確認工具頭連接線不會造成過大阻力<br/>2. 上蓋工具頭連接線接頭沒入約一半<br/>3. 可嘗試將工具頭連接線順時針或逆時針旋轉 180 度再插入<br/>4. 參考 <a target="_blank" href="https://flux3dp.zendesk.com/hc/zh-tw/articles/115003674128">此篇文章</a><br/>再試一次？' },
            befaultTutorialWelcome: '非常感謝您購買 FLUX Delta+！<br/><br/>以下內容能幫助您快速瞭解並使用您的 FLUX Delta+<br/>期待 FLUX Delta+ 能陪伴您度過美好的時光<br/><br/>＊請務必先觀看教學影片！請打開中文字幕',
            openBrowser: '開啟網頁',
            welcome: '歡迎使用'
        },
        slicer: {
            computing: '計算中',
            error: {
                '6': '工作路徑超過列印範圍, 請縮小物體尺寸、關閉底座、底部延伸圈數或是邊界預覽',
                '7': '進階設定參數錯誤\n',
                '8': '切片:: 切片結果要求早於切片結束',
                '9': '切片:: 路徑結果要求早於切片結束',
                '10': '切片:: 原始模型不存在於切片引擎，需重啟 FLUX Studio',
                '13': '切片:: 重制錯誤，複製原始ID不存在，需重啟 FLUX Studio',
                '14': '切片:: 無法設定物件位置及相關資訊，需重啟 FLUX Studio',
                '15': '切片:: 模型檔案內容無法解析',
                '16': '切片:: 切片引擎異常結束，建議調整設定',
                '1006': 'WS 已被強制關閉, 請於menu上方取得錯誤回報，寄送回FLUX'
            },
            pattern_not_supported_at_100_percent_infill: 'Slic3r 的 rectilinear 填充圖樣只支援 100% 的填充密度'
        },
        calibration: {
            RESOURCE_BUSY: '請確認機器的狀態是於待命中',
            headMissing: '無法取得工具頭資訊，請確認工具頭是否連接於機器',
            calibrated: '平台校正完成',
            extruderOnly: '請使用列印工具頭來做校正'
        },
        head_info: {
            ID                  : 'ID',
            VERSION             : '工具頭韌體版本',
            HEAD_MODULE         : '工具頭種類',
            EXTRUDER            : '列印模組',
            LASER               : '雷刻模組',
            USED                : '使用時間',
            HARDWARE_VERSION    : '硬體版本',
            FOCAL_LENGTH        : '焦距調整',
            hour                : '小時'
        }
    };
});
