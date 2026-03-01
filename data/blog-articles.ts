export type Language = 'en' | 'zh';

export interface BlogArticle {
  id: string;
  tags: string[];
  color: string;
  date: string;
  readingTime: { en: string; zh: string };
  en: { title: string; subtitle: string; content: string };
  zh: { title: string; subtitle: string; content: string };
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'intention-density',
    tags: ['AI', 'Creativity', 'Product Design'],
    color: '#FFDD00',
    date: '2026-03-01',
    readingTime: { en: '6 min read', zh: '6 分钟阅读' },
    en: {
      title: 'Intention Density: Miyazaki Hand-Drew 80,000 Frames',
      subtitle: 'And it explains why most AI work feels like it\'s missing something',
      content: `Miyazaki personally reviewed and redrew roughly 80,000 of the 144,000 frames in Princess Mononoke. He later said his eyes and hands could no longer allow him to work that way.

You can feel it when you watch the film. Every expression, every branch swaying in the wind, every pause before a character speaks — there's a specific person making a specific decision behind each one.

You can feel the creator through the work. That feeling has a more precise name.

Intention Density

I've been thinking about why some AI-generated work feels genuinely good while most of it is just slop. The common explanations are "taste" or "aesthetics," but those words are too vague. They describe outcomes, not mechanisms.

The more specific question is: how much of a work's structure comes from the creator's active decisions, and how much comes from the default path of "this is how it's usually done"?

I call this intention density.

When intention density is high, you can feel a mind at work behind the piece. When it's low, you feel a process. The work might be technically fine, even polished, but it has no signature. No single detail exists because "someone decided it should be this way."

Merriam-Webster chose "slop" as its 2025 word of the year. Everyone can perceive the problem. Intention density gives it a name.

AI Tools Lower Intention Density by Default

When you start from a blank canvas, you're forced to confront thousands of micro-decisions. Color palette, spacing, wording, structure, hierarchy, rhythm. Each decision is a vehicle for intention.

Now you write one prompt and get a complete app, a complete video, a complete article. All those micro-decisions are quietly outsourced to the model, and you didn't even realize they existed.

The output might look good. Codex-generated apps are usually well-structured with reasonable interactions. But the source of that structure is "how most people do it," encoded in the model's training data. The average of a million past decisions is a different thing from one person's specific vision.

A study in Science Advances confirms this from another angle: AI boosts individual creativity but reduces collective diversity of output. When everyone outsources decisions to the same model, outputs converge. Low intention density, at scale, produces homogenization.

The Creative Process Has Two Parts

1. Intention — what you want to create, and why
2. Execution — how you make it

AI agents are replacing nearly all of the execution layer. In software this is already happening, with over a million developers using Codex every week. Film and animation will follow soon.

The execution layer being replaced is fine in itself. Execution was never the part that gave a work its soul.

The problem is when AI moves up the chain and starts replacing intention. When you let the model decide not just "how to do it" but also "what to do" and "why to do it," creative output starts looking the same everywhere. Technically competent, aesthetically passable, spiritually hollow.

The Key Distinction

AI output has no reason to be slop.

The key is whether you're offloading your intention or expanding it.

Offloading means: I don't want to think about these decisions, let the model handle it. The result is convenient but mediocre.

Expanding means: since execution cost is approaching zero, I can spend more time on the decisions that truly matter. I can polish details I never had time to polish before. I become more intentional than before, not less.

If Miyazaki had AI tools to handle in-between frames, I believe he would have drawn more keyframes. He would have used the saved time to push his vision into every corner of the film.

The people making the best AI-assisted work right now are doing exactly this. They use AI as the execution layer but strictly guard their intention. More active decisions per output, fewer passive defaults.

The Standard Hasn't Changed

Whether intention density is high or low doesn't depend on whether you use AI. It depends on whether you care about the micro-decisions that most people would never even notice.

80,000 frames. That's the standard. Not that everyone needs to hand-draw their work. But the gap between "this thing was produced" and "this thing was decided" — your audience can always feel it.

The tools changed. The standard didn't.`,
    },
    zh: {
      title: '意图密度：宫崎骏亲手画了 8 万帧',
      subtitle: '这解释了为什么 AI 作品总觉得"差点意思"',
      content: `宫崎骏在《幽灵公主》的制作中，亲自审查并重绘了全片 144,000 帧中的约 80,000 帧。他后来说，自己的眼睛和双手已经不允许他再这样工作了。

看这部电影的时候你能感受到这件事。每一个表情，每一棵在风中摇动的树枝，每一次角色开口前的停顿，背后都有一个具体的人在做具体的决定。

你能透过作品感受到创作者。

这种感受有一个更精确的名字。

意图密度 / Intention Density

我最近一直在想，为什么有些 AI 生成的作品感觉确实不错，而大部分就是 slop（垃圾内容）。常见的解释是"品味"或者"审美"，但这些词太模糊了。它们描述的是结果，不是机制。

更具体的问题是：一个作品中，有多少结构来自创作者的主动决策，有多少来自"通常就是这么做的"默认路径？

我把这个叫做 intention density（意图密度）。

意图密度高的时候，你能感受到作品背后有一个头脑在运作。意图密度低的时候，你感受到的是一个流程。作品可能技术上没问题，甚至很精致，但它没有签名。没有任何一个细节是"因为某个人决定了它应该是这样"。

Merriam-Webster 把 "slop" 选为 2025 年度词汇。所有人都能感知到这个问题。意图密度给了它一个名字。

AI 工具默认降低意图密度

从空白画布开始创作的时候，你被迫面对上千个微观决策。配色、间距、措辞、结构、层级、节奏。每一个决策都是意图的载体。

现在你写一句 prompt 就能得到一个完整的 app、一段完整的视频、一篇完整的文章。所有这些微观决策都被悄悄外包给了模型，而你甚至没有意识到它们曾经存在。

产出可能看起来不错。Codex 生成的应用通常结构清晰、交互合理。但这些结构的来源是模型训练数据里编码的"大多数人怎么做"。一百万个过去决策的平均值，跟某个人的特定构想是两回事。

Science Advances 上的一项研究从另一个角度印证了这一点：AI 提升了个体的创造力，但降低了集体产出的多样性。当所有人把决策外包给同样的模型，产出趋同。低意图密度，在规模上，生产同质化。

创作过程可以拆成两部分

1. 意图（Intention）：你要创造什么，为什么
2. 执行（Execution）：你怎么把它做出来

AI agent 正在替代接近全部的执行层。在软件领域这已经在发生，超过一百万开发者每周使用 Codex。影视和动画领域很快会跟上。

执行层被替代，这本身没问题。执行从来都不是赋予作品灵魂的那个部分。

问题出在 AI 沿着链条往上走，开始替代意图的时候。当你让模型决定的不只是"怎么做"，还包括"做什么"和"为什么做"，创作产出就开始变得千篇一律。技术上合格，审美上过关，精神上空洞。

关键区分

AI 产出没有理由必须是 slop。

关键在于你是在卸载（offload）你的意图，还是在扩展（expand）你的意图。

卸载意味着：我不想思考这些决策，让模型处理。结果方便但平庸。

扩展意味着：既然执行成本接近于零，我可以把更多时间花在真正重要的决策上。我可以打磨之前没时间打磨的细节。我变得比以前更有意图，而不是更少。

如果宫崎骏有 AI 工具来处理中间帧，我相信他会画更多的关键帧。他会把省下的时间用来把自己的构想推进到影片的每一个角落。

现在做出最好的 AI 辅助作品的人，做的就是这件事。他们把 AI 当作执行层，但严格守护自己的意图。每个产出里的主动决策更多了，被动默认更少了。

标准没有变

意图密度的高低不取决于你用不用 AI。它取决于你是否在乎那些大多数人根本不会注意到的微观决策。

80,000 帧。这就是标准。不是说每个人都需要手绘自己的作品。而是"这个东西被做出来了"和"这个东西被决定了"之间的差距，你的观众永远感受得到。

工具变了。这个标准没变。`,
    },
  },
];
