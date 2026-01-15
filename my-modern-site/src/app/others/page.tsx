"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function OthersPage() {
    return (
        // pt-32 を追加して、固定ヘッダーに被らないようにします
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8 pt-32">
            <div className="max-w-3xl mx-auto">
                {/* 戻るボタン */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors mb-12 font-medium"
                >
                    <ArrowLeft size={20} />
                    ホームへ戻る
                </Link>

                <header className="mb-12">
                    <h1 className="text-5xl font-black tracking-tight mb-4">Others</h1>
                    <div className="w-20 h-1.5 bg-emerald-600 rounded-full"></div>
                </header>

                {/* ...以下コンテンツ... */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-emerald-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">受賞一覧</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">・電子情報通信学会北陸支部 優秀学生賞 (2025.02.17)</li>
                        <li className="flex items-center gap-2">・第2回つるぎハーフリレーマラソン 優勝 (2024.11.17)</li>
                        <li className="flex items-center gap-2">・第32回立山アルペン健康マラソン大会 2位 (2025.10.19)</li>
                    </ul>
                </section>

                <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-emerald-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">インターン</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">・北銀ソフトウェア： 5Days (2023)</li>
                        <li className="flex items-center gap-2">・YKK： ＜技術系＞夏季職場体験型インターン 5Days (2025) ※インターン高評価学生</li>
                        <li className="flex items-center gap-2">・セイコーエプソン： 情報系職場受入インターン 2Weeks (2026)</li>
                    </ul>
                </section>

                <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-emerald-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">アルバイト</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">● 家庭教師 (2021-2025)</li>
                        <li className="flex items-center gap-2">・実績：県立高校2名、私立高校2名、国立大学1名</li>
                        <li className="flex items-center gap-2">● TA (Teaching Assistant)(2025.04-)</li>
                        <li className="flex items-center gap-2">・実績 プログラミング2(Java)、情報システム工学実験1・2(Matlab)</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}