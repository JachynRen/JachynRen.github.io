export default function Home() {
  const projects = [
    {
      title: "IIC上位机",
      tag: "桌面工具",
      description: "IIC上位机可以通过IIC总线与芯片进行通信",
    },
    {
      title: "音频网络芯片上位机",
      tag: "嵌入式联调",
      description: "音频网络芯片上位机可以通过IIC总线与控制和监控芯片状态",
    },
    {
      title: "并行计算",
      tag: "高性能计算",
      description: "树莓派集群上进行并行计算",
    },
    {
      title: "人流量可视化",
      tag: "数据可视化",
      description: "通过数据可视化技术，实时展示和分析人流量分布和变化趋势。",
    },
  ];

  return (
    <div id="home" className="relative flex min-h-screen flex-col overflow-hidden">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Jachyn</p>
            <p className="text-sm text-slate-300">欢迎光临</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="transition hover:text-white">关于</a>
            <a href="#projects" className="transition hover:text-white">项目</a>
            {/* <a href="#roadmap" className="transition hover:text-white">规划</a> */}
            <a href="#contact" className="transition hover:text-white">联系</a>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:py-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              个人主页
              {/* 个人展示 · 后续可演进成内容平台 */}
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                欢迎来到Jachyn的主页。
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                这个首页有关于我、项目、能力和联系方式。
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                查看项目
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                联系我
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* {[
                ["01", "清晰展示身份"],
                ["02", "预留未来功能"],
                ["03", "适配移动端"],
              ].map(([index, text]) => (
                <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">Step {index}</p>
                  <p className="mt-2 text-sm text-slate-100">{text}</p>
                </div>
              ))} */}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-[var(--surface)] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[var(--surface-strong)] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-21 w-21 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-sky-500 text-2xl font-bold text-slate-950">
                  Jachyn
                </div>
                <div>
                  <p className="text-sm text-cyan-200/70">当前主页</p>
                  <h2 className="text-2xl font-semibold text-white">个人展示站</h2>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p>GitHub 链接：</p>
                <a
                  href="https://github.com/JachynRen"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-cyan-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  github.com/JachynRen
                </a>
              </div>

     
            </div>
          </aside>
        </section>

        <section id="about" className="py-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">个人介绍</p>
            <h2 className="text-3xl font-semibold text-white">关于我</h2>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-slate-300">教育经历</p>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">中国科学院大学</h3>
                <p className="mt-2 text-sm text-slate-300">2025.09 - 2027.06 | 工程科学学院 | 信息系统（工程管理） | GPA: 3.69</p>
                <p className="mt-4 text-sm font-medium text-cyan-200/80">主修课程</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  定量分析：模型与方法、科学研究中的机器学习方法、深度学习、工程系统建模与仿真、云计算、工程经济学、项目计划与控制。
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">武汉轻工大学</h3>
                <p className="mt-2 text-sm text-slate-300">2018.09 - 2022.06 | 数学与计算机学院 | 计算机科学与技术 | GPA: 3.78</p>
                <p className="mt-4 text-sm font-medium text-cyan-200/80">主修课程</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  数据结构、计算机组成原理、操作系统、计算机网络技术、面向对象程序设计、JAVA程序设计、数据库系统概论、软件工程概论、计算机算法基础、编译原理。
                </p>
              </article>
            </div>
          </div>
          {/* <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["简介", "姓名：jachyn、所在城市：北京"],
              ["风格", "简洁、现代、可持续扩展"],
              ["目标", "先上线，再不断补充内容"],
              ["能力", "设计、开发、表达、协作"],
            ].map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div> */}
        </section>

        <section id="projects" className="py-10">
          <div className="mb-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">项目</p>
            <h2 className="text-3xl font-semibold text-white">作品集</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/8"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{project.tag}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* <section id="roadmap" className="grid gap-5 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">未来规划</p>
            <h2 className="text-3xl font-semibold text-white">这个站点可以逐步升级成完整平台。</h2>
          </div>
          <div className="grid gap-4">
            {[
              "阶段一：完善首页、作品展示和联系方式，先上线可用版本。",
              "阶段二：加入博客、文章列表、分类和详情页。",
              "阶段三：扩展留言、登录、后台管理和搜索功能。",
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-300">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300/15 text-sm font-semibold text-cyan-200">
                  0{index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section> */}

        <section id="contact" className="py-10">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-300/10 to-sky-300/10 p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">联系</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">个人邮箱</h2>
            {/* <p className="mt-4 max-w-2xl text-slate-300 leading-7">
              邮箱、GitHub、微信、X 或者其他社交账号都可以放这里。等你后面有更多功能，我们再继续往这个基础上添加。
            </p> */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:jachyn@foxmail.com"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                jachyn@foxmail.com
              </a>
              <a
                href="#home"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                返回顶部
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
