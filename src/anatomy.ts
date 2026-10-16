export type Structure = {
  id: string
  fma: string
  name: string
  sourceName: string
  group: 'Esophagus' | 'Neighbouring organs' | 'Arteries' | 'Veins' | 'Nerves'
  // Official 4.3 IS-A concepts this group draws its source meshes from.
  concepts: string[]
  // FJ element files; each element belongs to exactly one structure.
  elements: string[]
  color: string
  description: string
  note: string
}

export const structures: Structure[] = [
  {
    id: 'esophagus',
    fma: 'FMA7131',
    name: 'Esophagus',
    sourceName: 'esophagus',
    group: 'Esophagus',
    concepts: ['FMA7131'],
    elements: ['FJ2563'],
    color: '#e0956a',
    description:
      'A muscular tube about 25 cm long that carries swallowed food from the throat to the stomach. It runs behind the trachea and the heart and passes through the diaphragm.',
    note: 'The tube is shown as one surface. Its cervical, thoracic and abdominal parts and its sphincters are not separate meshes, so they cannot be selected on their own.',
  },
  {
    id: 'stomach',
    fma: 'FMA7148',
    name: 'Stomach',
    sourceName: 'stomach',
    group: 'Neighbouring organs',
    concepts: ['FMA7148'],
    elements: ['FJ2564'],
    color: '#c9a07a',
    description:
      'The esophagus ends just below the diaphragm, which is not shown, by opening into the stomach at the cardia.',
    note: 'Included for orientation. The duodenum and the rest of the gut are omitted.',
  },
  {
    id: 'trachea',
    fma: 'FMA7394',
    name: 'Trachea',
    sourceName: 'trachea',
    group: 'Neighbouring organs',
    concepts: ['FMA7394'],
    elements: ['FJ2541'],
    color: '#b9c4cc',
    description:
      'The windpipe lies directly in front of the esophagus in the neck and upper chest, until it divides into the two main bronchi.',
    note: 'Included for orientation. Its rings are not modelled separately.',
  },
  {
    id: 'main-bronchi',
    fma: 'FMA7395',
    name: 'Main bronchi',
    sourceName: 'right and left main bronchi',
    group: 'Neighbouring organs',
    concepts: ['FMA7395', 'FMA7396'],
    elements: ['FJ6583', 'FJ6533'],
    color: '#a5b3bd',
    description:
      'The left main bronchus crosses in front of the esophagus and presses a shallow narrowing into it.',
    note: 'Both bronchi are grouped as one selectable set. The lungs are omitted.',
  },
  {
    id: 'thyroid-gland',
    fma: 'FMA13368',
    name: 'Thyroid gland',
    sourceName: 'right and left lobes and isthmus of thyroid gland',
    group: 'Neighbouring organs',
    concepts: ['FMA13368', 'FMA13369', 'FMA49178'],
    elements: ['FJ3672', 'FJ3671', 'FJ3670'],
    color: '#b8869b',
    description:
      'Wraps around the front and sides of the trachea in the lower neck, beside the start of the esophagus.',
    note: 'Both lobes and the isthmus are grouped as one selectable set. Included for orientation.',
  },
  {
    id: 'left-atrium',
    fma: 'FMA9531',
    name: 'Left atrium',
    sourceName: 'wall of left atrium',
    group: 'Neighbouring organs',
    concepts: ['FMA9531'],
    elements: ['FJ2438'],
    color: '#c47a86',
    description:
      'The back of the heart. The esophagus lies directly behind it, separated only by the pericardium.',
    note: 'Only the wall of the left atrium is included; the rest of the heart is shown in the heart explorer.',
  },
  {
    id: 'aortic-arch',
    fma: 'FMA3768',
    name: 'Arch of aorta',
    sourceName: 'arch of aorta',
    group: 'Arteries',
    concepts: ['FMA3768'],
    elements: ['FJ3411'],
    color: '#b8564c',
    description:
      'Curves over the left main bronchus, crossing the left side of the esophagus and leaving a narrowing where it presses on it.',
    note: 'The ascending aorta and the arch’s large branches are omitted.',
  },
  {
    id: 'descending-aorta',
    fma: 'FMA3784',
    name: 'Descending aorta',
    sourceName: 'descending aorta',
    group: 'Arteries',
    concepts: ['FMA3784'],
    elements: ['FJ3427'],
    color: '#a94a46',
    description:
      'Runs down behind and to the left of the esophagus. Near the diaphragm the esophagus crosses in front of it.',
    note: 'Shown down into the abdomen. The diaphragm it passes behind is omitted.',
  },
  {
    id: 'esophageal-arteries',
    fma: 'FMA4149',
    name: 'Esophageal arteries',
    sourceName: 'esophageal artery and set of oesophageal branches of thoracic aorta',
    group: 'Arteries',
    concepts: ['FMA4149', 'FMA71537'],
    elements: ['FJ1934', 'FJ3431'],
    color: '#de9878',
    description: 'Small branches of the aorta that supply the thoracic part of the esophagus.',
    note: 'Two source meshes are grouped as one selectable set. Small vessels are simplified.',
  },
  {
    id: 'inferior-thyroid-arteries',
    fma: 'FMA10697',
    name: 'Inferior thyroid arteries',
    sourceName: 'right and left inferior thyroid arteries',
    group: 'Arteries',
    concepts: ['FMA10697', 'FMA10680'],
    elements: ['FJ2209', 'FJ2210'],
    color: '#c9725f',
    description: 'Supply the thyroid gland and send branches to the esophagus in the neck.',
    note: 'Only short segments near the thyroid are included. Both sides are one selectable set.',
  },
  {
    id: 'left-gastric-artery',
    fma: 'FMA14768',
    name: 'Left gastric artery',
    sourceName: 'left gastric artery',
    group: 'Arteries',
    concepts: ['FMA14768'],
    elements: ['FJ3499'],
    color: '#d0836c',
    description:
      'Runs along the upper curve of the stomach and sends branches up to the abdominal part of the esophagus.',
    note: 'The celiac trunk it comes from is omitted.',
  },
  {
    id: 'azygos-vein',
    fma: 'FMA4838',
    name: 'Azygos vein',
    sourceName: 'azygos vein',
    group: 'Veins',
    concepts: ['FMA4838'],
    elements: ['FJ3416'],
    color: '#5f7fa6',
    description:
      'Runs up the right side of the spine, behind the esophagus, and drains most of the esophagus in the chest.',
    note: 'Best seen from the posterior or left lateral view.',
  },
  {
    id: 'hemiazygos-veins',
    fma: 'FMA4944',
    name: 'Hemiazygos veins',
    sourceName: 'hemiazygos vein and accessory hemiazygos vein',
    group: 'Veins',
    concepts: ['FMA4944', 'FMA5011'],
    elements: ['FJ3434', 'FJ1981'],
    color: '#7f9fbf',
    description:
      'Run up the left side of the spine and cross behind the aorta to join the azygos vein.',
    note: 'The hemiazygos and accessory hemiazygos veins are grouped as one selectable set.',
  },
  {
    id: 'left-gastric-vein',
    fma: 'FMA15399',
    name: 'Left gastric vein',
    sourceName: 'left gastric vein',
    group: 'Veins',
    concepts: ['FMA15399'],
    elements: ['FJ3500'],
    color: '#93aecb',
    description:
      'Drains the lower esophagus into the portal system. Its link with the azygos veins is where esophageal varices form when portal pressure rises.',
    note: 'The portal vein it drains into is shown in the liver and pancreas explorers.',
  },
  {
    id: 'right-vagus-nerve',
    fma: 'FMA18151',
    name: 'Right vagus nerve',
    sourceName: 'trunk of right vagus nerve',
    group: 'Nerves',
    concepts: ['FMA18151'],
    elements: ['FJ4024'],
    color: '#e0c25a',
    description:
      'Descends beside the esophagus, joins the esophageal plexus and passes through the hiatus mostly behind it, as the posterior vagal trunk.',
    note: 'Its full course from the skull base is included, so it extends above the esophagus.',
  },
  {
    id: 'left-vagus-nerve',
    fma: 'FMA18157',
    name: 'Left vagus nerve',
    sourceName: 'trunk of left vagus nerve',
    group: 'Nerves',
    concepts: ['FMA18157'],
    elements: ['FJ3926'],
    color: '#c9a73f',
    description:
      'Crosses the aortic arch, then spreads over the esophagus and passes through the hiatus mostly in front of it, as the anterior vagal trunk.',
    note: 'Its full course from the skull base is included, so it extends above the esophagus.',
  },
  {
    id: 'recurrent-laryngeal-nerves',
    fma: 'FMA80694',
    name: 'Recurrent laryngeal nerves',
    sourceName: 'trunks of right and left recurrent laryngeal nerves',
    group: 'Nerves',
    concepts: ['FMA80694', 'FMA80695'],
    elements: ['FJ4021', 'FJ3923'],
    color: '#ead27a',
    description:
      'Branches of the vagus that climb back up in the groove between the trachea and esophagus to reach the larynx.',
    note: 'Both sides are one selectable set. The left loops under the aortic arch, the right under the subclavian artery (omitted).',
  },
]
export const groups = ['Esophagus', 'Neighbouring organs', 'Arteries', 'Veins', 'Nerves'] as const
export const byId = Object.fromEntries(structures.map((s) => [s.id, s]))
export type View = 'Anterior' | 'Posterior' | 'Left lateral'
export const tour: { id: string; title: string; text: string; view: View; isolate?: boolean }[] = [
  {
    id: 'esophagus',
    title: 'From throat to stomach',
    text: 'The esophagus is isolated here. It runs down through the neck and chest and bends slightly left to reach the stomach. Restore all to see what surrounds it.',
    view: 'Anterior',
    isolate: true,
  },
  {
    id: 'trachea',
    title: 'Behind the windpipe',
    text: 'From the side, the trachea sits directly in front of the esophagus. Food and air share the throat, then part ways here.',
    view: 'Left lateral',
  },
  {
    id: 'aortic-arch',
    title: 'Two narrowings',
    text: 'The arch of the aorta and the left main bronchus cross the esophagus in the chest. Each presses a slight narrowing into it.',
    view: 'Left lateral',
  },
  {
    id: 'left-atrium',
    title: 'Close to the heart',
    text: 'Lower down, the esophagus lies right behind the left atrium. That is why ultrasound from inside the esophagus gives a clear view of the heart.',
    view: 'Posterior',
  },
  {
    id: 'stomach',
    title: 'Into the stomach',
    text: 'Below the diaphragm (not shown) the esophagus opens into the stomach. The two vagus nerves follow it through the same opening.',
    view: 'Anterior',
  },
]

export type Emphasis = 'normal' | 'selected' | 'ghosted'
// With nothing selected every structure keeps its own color. A selection
// keeps its structure solid and ghosts the rest so it stays visible even
// when it sits behind other geometry (esophagus behind the heart, azygos vein).
export function emphasis(id: string, selected: string | null): Emphasis {
  if (!selected) return 'normal'
  return id === selected ? 'selected' : 'ghosted'
}
