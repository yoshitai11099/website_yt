"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WorksPage() {
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
          <h1 className="text-5xl font-black tracking-tight mb-4">Works</h1>
          <div className="w-20 h-1.5 bg-purple-600 rounded-full"></div>
        </header>

        {/* ...以下コンテンツ... */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-purple-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold">富山方便クイズ（大学）</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">富山を知ってもらう目的で作成した富山方便に関するクイズアプリ。この意味を持つ方便はどれかを答える「３択クイズ」「入力型クイズ」、２人の会話で自然な流れになるように空欄の枠に入るセリフを答える「会話型クイズ」があり、合計で115問搭載。</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Processing</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">p5.js</span>
          </div>
        </section>

        <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-purple-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold">マルチカラーボトル（大学）</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">マイコンとセンサを扱えるようになることを目的とした、ボトル内に螺旋状に設置されたLEDを回転角度センサにて光らせるイルミネーション風の作品。デバイス本体を傾けたり、外界温度によってLEDの光色が変化する。</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">ESP32</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Arduino IDE</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">センサ</span>
          </div>
        </section>

        <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-purple-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold">アスレチック型ゲーム（個人）</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">ゲーム開発に興味を持ち、Unityで初めて作成したアスレチックゲーム。この取り組みからゲームの基本となる「画面遷移」「キー入力」「アイテム管理」「クリア、ミス判定」などの実装方法を学んだ。</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Unity3D</span>
          </div>
        </section>

        <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-purple-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold">チャットボットアプリケーション開発（インターンシップ）</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">インターンシップにて業務効率の向上を目的とした，ユーザの質問に対してBotが適当な返答を行うアプリケーションを作成．ユーザが直感的に操作を行えるUI設計やDjangoフレームワークを用いたアプリケーション開発を経験することができた．</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Python</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Django</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">SQLite</span>
          </div>
        </section>

        <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-purple-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold">自身のWebサイト（個人）</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">講義で学んだ技術のアウトプットと自身が行ってきたことを整理することを目的とした，自身のホームページを作成．本サイトは，Next.jsフレームワークを用い，自身で作成・運用を行っている．</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Next.js</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">TypeScript</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">TailwindCSS</span>
          </div>
        </section>

        <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-purple-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold">研究</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">VR(Virtual Reality)に関する研究．特に力触覚提示デバイス・半拘束に関する研究を行う．</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">半拘束</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Haptic Device</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Unity3D，VR</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">HMD(Head Mounted Display)</span>
          </div>
          <div className="mt-8 flex items-center mb-6">
            {/* <div className="w-1 h-8 bg-purple-600 rounded-full mr-4"></div> */}
            <h2 className="font-bold">学会発表</h2>
          </div>
          <li>吉田大葵，田川和義，半拘束型掌力触覚提示デバイスの基礎的検討 -示指の多様な動きへの対応化，第29回日本バーチャルリアリティ学会論文集，3D2-07，Sep.2024</li>
          <li>吉田大葵，田川和義，半拘束状態下における手の位置変化量に基づくアバタ制御，電気学会C部門知的情報研究会，テーマ「知・技の伝承のためのxR技術および一般」，PI-25-014，Mar.2025</li>
          <li>吉田大葵，田川和義，半拘束型力触覚デバイスのための手指操作範囲拡張インタフェースの提案，第30回日本バーチャルリアリティ学会大会論文集，3C1-10，Sep.2025</li>
        </section>

      </div>
    </div>
  );
}