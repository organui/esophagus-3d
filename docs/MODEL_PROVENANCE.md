# Model provenance and preparation

## Source and license

The runtime model uses **BodyParts3D / Anatomography 4.3** (object set 4.3, ontology tree FMA3.0), retrieved **2026-10-16**. All selected OBJ headers report compatibility version 4.3.

The original service explicitly permits modification and redistribution of contour data and rendered images under **[CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)** ([legal text](https://creativecommons.org/licenses/by-sa/2.1/jp/legalcode)). An inert [snapshot of that notice](model-source/original-license.html.txt), copied from the lungs explorer's provenance record, is included. This license governs `public/models/esophagus.glb`, the manifest's model data and the model screenshots, separately from the MIT application code. This follows the same choice as [lungs-3d](https://github.com/organui/lungs-3d) and [pancreas-3d](https://github.com/organui/pancreas-3d), which also use 4.3 data: the LSDB archive's CC BY 4.0 grant covers its 4.0 release and is not extended to these 4.3 meshes.

Credit: **BodyParts3D / Anatomography, © The Database Center for Life Science (DBCLS).** Adapted by OrganUI. No endorsement is implied.

## Retrieval and pinning

The network policy of the sandbox this was built in blocked both `dbarchive.biosciencedbc.jp` and `lifesciencedb.jp`, so the official archives could not be downloaded. Geometry comes from the public [olivercase/body_parts_3d_api](https://github.com/olivercase/body_parts_3d_api) mirror, pinned at commit `fd527e6f4daf732fd814314d9257df5877b844bc` (the same commit the lungs and pancreas explorers pin).

Each OBJ is checked three ways:

1. Its SHA-256 matches the oid in its pinned Git LFS pointer (recorded per file in [model-inputs.json](../scripts/model-inputs.json)).
2. Its embedded `File ID` and `Concept ID` headers match.
3. That concept maps to that FJ element in the official 4.3 IS-A table, [`FMA2Obj-4.3.tsv`](model-source/FMA2Obj-4.3.tsv) (SHA-256 `c3d16c89…935d4f`). The table is the unchanged official download preserved by lungs-3d; `prepare-model.ts` refuses to run if its hash changes.

The official per-element metadata table (original model filenames) could not be fetched, so unlike lungs-3d it is not preserved here.

## Selected structures

| Structure | Source concept(s) | Elements |
| --- | --- | --- |
| Esophagus | FMA7131 | FJ2563 |
| Stomach | FMA7148 | FJ2564 |
| Trachea | FMA7394 | FJ2541 |
| Main bronchi | FMA7395 right, FMA7396 left | FJ6583, FJ6533 |
| Thyroid gland | FMA13368 right lobe, FMA13369 left lobe, FMA49178 isthmus | FJ3672, FJ3671, FJ3670 |
| Left atrium | FMA9531 wall of left atrium | FJ2438 |
| Arch of aorta | FMA3768 | FJ3411 |
| Descending aorta | FMA3784 (IS-A element) | FJ3427 |
| Esophageal arteries | FMA4149 esophageal artery, FMA71537 oesophageal branches of thoracic aorta | FJ1934, FJ3431 |
| Inferior thyroid arteries | FMA10697 right, FMA10680 left | FJ2209, FJ2210 |
| Left gastric artery | FMA14768 | FJ3499 |
| Azygos vein | FMA4838 | FJ3416 |
| Hemiazygos veins | FMA4944 hemiazygos, FMA5011 accessory hemiazygos | FJ3434, FJ1981 |
| Left gastric vein | FMA15399 | FJ3500 |
| Right vagus nerve | FMA18151 trunk | FJ4024 |
| Left vagus nerve | FMA18157 trunk | FJ3926 |
| Recurrent laryngeal nerves | FMA80694 right trunk, FMA80695 left trunk | FJ4021, FJ3923 |

24 elements, 134,712 triangles. Each element belongs to exactly one structure; the script refuses duplicates and unused inputs. Per-element hashes, sizes and counts are in the [manifest](../public/models/manifest.json) and [selected-mappings.tsv](model-source/selected-mappings.tsv).

Decisions:

- **One esophagus mesh.** FMA7131 maps only to FJ2563 (578 triangles). The source has no separate cervical, thoracic or abdominal parts and no sphincter meshes, so those cannot be selected, and the mesh is coarse compared with its neighbours.
- **One trachea mesh.** FMA7394 maps to FJ2541 and FJ6588. They have the same bounds and triangle count but slightly different vertices, so they are two versions of one surface; rendering both would z-fight. FJ2541 is used and FJ6588 excluded.
- **Right main bronchus** uses its IS-A element FJ6583. FJ2539 (FMA68418, "right main bronchus proper") covers the same bounds and is excluded.
- **Descending aorta** uses its IS-A element; its PART-OF set adds the inferior phrenic arteries, which are omitted. The mesh continues into the abdomen.
- **The vagus nerves** are the full trunks, so they reach the skull base above the esophagus.
- **No diaphragm.** FJ3131 (68,522 triangles) was tried. It doubled the model size and covered the stomach and lower esophagus from every preset view, so it is omitted and the hiatus is described in text.
- Omitted: pharynx, larynx, lungs, the rest of the heart, ascending aorta and arch branches, celiac trunk, portal vein, phrenic nerves, lymph nodes, vertebrae and body context.

## Transformation and orientation

Vertices are recentred on the selection's source bounding box and uniformly scaled by `0.01`; axes change from source `[x, y, z]` to display `[x, z, -y]` (source +x patient left, −y anterior, +z superior). Anterior view looks along display −Z, posterior along +Z, and the left lateral view looks from the patient's left (display +X), with anterior on the viewer's left. In the anterior view the azygos vein is on the viewer's left and the stomach on the right, as expected. No anatomical reshaping or decimation is performed.

## Reproduce

```sh
bun run prepare:model   # downloads missing OBJs into .asset-cache/objs, verifies, writes the GLB and manifest
bun run verify:model    # checks the GLB hash, structure IDs, element lists and geometry
```
